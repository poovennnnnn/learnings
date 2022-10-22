package com.pooven.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.pooven.filter.SecurityFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private SecurityFilter securityFilter;
	
	@Autowired
	private InvalidUserAuthenticationEntryPoint authEntryPoint;

	@Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManager();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth
		    .userDetailsService(userDetailsService)
		    .passwordEncoder(passwordEncoder);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		
		http
		    .csrf().disable()  //there is a crsf attacks hacker use #to avoid this attack use this . now this is disabled
		    .authorizeRequests()
		    .antMatchers("/auth/login","/auth/signup").permitAll()
		    .antMatchers("/auth/admin").hasRole("ADMIN")
		    .anyRequest().authenticated()
		    .and()  // is used seperate portion the above line is one set and below is another set is for exception handling
		    .exceptionHandling()
		    .authenticationEntryPoint(authEntryPoint)
		    .and()
		    .sessionManagement()
		    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		    
		    //verify user for 2nd request onwards
		    .and()
		    //the following line will register the filter mentioned and its functionality
		    //is useful(or execute) 2nd requestonwards
		    .addFilterBefore(securityFilter,UsernamePasswordAuthenticationFilter.class);
		    
		    

	}


	
	
	
	
	
	
	
	
	
	
}
