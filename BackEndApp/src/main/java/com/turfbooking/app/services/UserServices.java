package com.turfbooking.app.services;

import java.util.List;

import com.turfbooking.app.bean.User;

public interface UserServices {

	User addUser(User user);

	List<User> getAllUers();

	User findByEmailAndPassword(String email, String password);

	User findById(Long id);
	
	User updateUserDetails(User user);
	
	//User findTurfOwnerByEmailAndPassword(String email , String password);
	
}
