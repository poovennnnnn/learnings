package com.example.jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringBootJwt2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJwt2Application.class, args);
		System.out.println("app jwt2 started...");
	}

	
}
