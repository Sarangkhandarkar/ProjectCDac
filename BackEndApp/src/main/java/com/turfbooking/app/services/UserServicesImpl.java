package com.turfbooking.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.User;
import com.turfbooking.app.customexception.ResourceNotFoundException;
import com.turfbooking.app.dto.LoginRequestDto;
import com.turfbooking.app.repositories.UserRepository;

@Service
@Transactional
public class UserServicesImpl implements UserServices {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUers() {
		return userRepo.findAll();
	}

	@Override
	public User findByEmailAndPassword(String email,String password) {
		User user = userRepo.findByEmailAndPassword(email ,password);
		return user;
	
	}

	@Override
	public User findById(Long id) {
		return userRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Invalid Id !!!!"));
	}

	@Override
	public String updateUserDetails(User user) {
		
		if(userRepo.existsById(user.getId()))
		{
			userRepo.save(user);
			return "User Data Updated Successfully !!";
		}
		return "User Data Updation is Failed !!!!";
	}

	
}
