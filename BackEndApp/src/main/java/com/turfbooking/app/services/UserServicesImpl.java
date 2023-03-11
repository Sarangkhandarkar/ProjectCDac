package com.turfbooking.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.Role;
import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.bean.User;
import com.turfbooking.app.dto.LoginRequestDto;
import com.turfbooking.app.dto.TurfOwnerSpecificResponse;
import com.turfbooking.app.dto.UserSpecificResponse;
import com.turfbooking.app.repositories.TurfRepository;
import com.turfbooking.app.repositories.UserRepository;

@Service
@Transactional
public class UserServicesImpl implements UserServices {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private TurfService turfService;

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUers() {
		return userRepo.findAll();
	}

	@Override
	public User findById(Long id) {
		return userRepo.findById(id).get();
	}

	@Override
	public User updateUserDetails(User user) {
		return userRepo.save(user);
	}

	@Override
	public UserSpecificResponse authenticateUser(LoginRequestDto dto) {
		
		User user = userRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
		if(user != null )
		{
			return mapper.map(user,UserSpecificResponse.class);
		}
		
		 return null;
	}

	

}
