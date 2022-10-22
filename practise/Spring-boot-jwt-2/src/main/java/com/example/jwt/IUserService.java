package com.example.jwt;

import java.util.Optional;




public interface IUserService {

	public User saveUser(User user);
	public Optional<User> findByUsername(String username);
}
