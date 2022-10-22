package com.example.jwt;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;



public interface UserRepo extends CrudRepository<User, Integer>{

	public Optional<User> findByUsername(String username);
}
