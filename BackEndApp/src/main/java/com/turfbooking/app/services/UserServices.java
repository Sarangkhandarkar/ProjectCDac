package com.turfbooking.app.services;

import java.util.List;

import com.turfbooking.app.bean.User;
import com.turfbooking.app.dto.LoginRequestDto;
import com.turfbooking.app.dto.TurfOwnerSpecificResponse;
import com.turfbooking.app.dto.UserSpecificResponse;

public interface UserServices {

	User addUser(User user);

	List<User> getAllUers();

	UserSpecificResponse authenticateUser(LoginRequestDto dto);

	User findById(Long id);

	User updateUserDetails(User user);

}
