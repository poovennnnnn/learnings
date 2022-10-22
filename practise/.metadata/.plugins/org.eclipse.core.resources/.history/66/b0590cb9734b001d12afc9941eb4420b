package com.example.jwt;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/user")
public class UserRestController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private IUserService service;
	
	@Autowired
	private JwtUtil jwt;
	
	@PostMapping("/save")
	public ResponseEntity<User> saveUser(@RequestBody User user){
		System.out.println("user = " + user);
		User newUser= service.saveUser(user);
		
		//return new ResponseEntity<String>(body,HttpStatus.OK);
		return ResponseEntity.ok(newUser);
		 
	}
	
	// validate username and password against database, and then if valid, then
	// using that username as the "subject" of JWT token, generate the token
	
	@PostMapping("/login")
	public ResponseEntity<UserResponse> loginUser(@RequestBody UserRequest userRequest){
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						userRequest.getUsername(), userRequest.getPassword()));

		//TODO : validate user against database
		String token =jwt.generateToken(userRequest.getUsername());
		
		return ResponseEntity.ok(new UserResponse(token, "Token created Successfully.."));
	} 
	
	// after login only.  2nd request onwards
	
	@PostMapping("/welcome")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> accessData1(Principal p) {
		return ResponseEntity.ok("Role admin=> " + p.getName());
	}
	
	@PostMapping("/greet")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<String> accessData2(Principal p) {
		return ResponseEntity.ok("Role user => " + p.getName());
	}
}
