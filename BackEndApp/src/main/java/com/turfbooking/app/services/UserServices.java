package com.turfbooking.app.services;

import java.util.List;

import com.turfbooking.app.bean.User;
import com.turfbooking.app.dto.LoginRequestDto;

public interface UserServices {

	User addUser(User user);

	List<User> getAllUers();

	User findByEmailAndPassword(String email, String password);

	User findById(Long id);
	
	String updateUserDetails(User user);



	

	
}
