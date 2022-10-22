package com.pooven.controller;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pooven.dto.User;
import com.pooven.dto.UserRequest;
import com.pooven.dto.UserResponse;
import com.pooven.service.UserService;
import com.pooven.util.JwtUtil;

@RestController
@RequestMapping("/auth")
//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
public class UserRestController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService service;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	@PostMapping("/signup")
//	@RequestMapping(method = RequestMethod.POST,value = "/signup",produces = "application/json")
	public ResponseEntity<Object> save(@Valid @RequestBody User user){
		
		if(service.existsByUsername(user.getUsername())) {
			throw new UsernameNotFoundException("user Already exists");
		}
		
		
		Integer id = service.saveUser(user);
		String body = "User "+id+ " is saved";
		return ResponseEntity.ok(new UserResponse(body,""));
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<UserResponse> login(@RequestBody UserRequest userRequest){
		
		//this will authenticate and throw an exception if auth fails
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						userRequest.getUsername(), userRequest.getPassword()));
		
		//generate Token 
		User user = service.findByUsername(userRequest.getUsername()).get();
		String token = jwtUtil.generateTokenS(userRequest.getUsername(),user.getRoles());
		
		
		return ResponseEntity.ok(new UserResponse(token,"token created succesfully"));
	}

	
	@GetMapping("/welcome")
	@PreAuthorize("hasAnyRole('USER')")
	public ResponseEntity<String> accessData(Principal p){
		return ResponseEntity.ok("Hello User => "+p.getName());
	}
	
	
	@GetMapping("/admin")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<String> admin(){
		return ResponseEntity.ok("Hello admin");
	}
}
