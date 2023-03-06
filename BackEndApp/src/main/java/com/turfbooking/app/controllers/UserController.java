package com.turfbooking.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.Role;
import com.turfbooking.app.bean.User;
import com.turfbooking.app.services.UserServices;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserServices userServices;

	public UserController() {
		System.out.println("In Ctor " + getClass().getName());
	}

	@GetMapping("/userlist")
	public ResponseEntity<?> fetchAllUsers() {
		System.out.println("In fetch all USers");
		List<User> userList = userServices.getAllUers();
		if(userList.isEmpty())
			return new ResponseEntity<>("User List Is empty !!!!",HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(userList,HttpStatus.OK);
	}

	@PostMapping("/saveuser")
	public ResponseEntity<User> addUser(@RequestBody @Valid User user) {
		System.out.println("In save emp " + user + " id " + user.getId());
		
		return new ResponseEntity<User>(userServices.addUser(user),HttpStatus.CREATED);
	}
	
	// API to get turf_owner
	@PostMapping("/authenticate/turfOwner")
	public User findTurfOwnerEmailAndPassword(@RequestParam String email,@RequestParam String password)
	{
		User user = userServices.findByEmailAndPassword(email, password);
		if(user.getRole().equals(Role.TURF_OWNER))
		{
			return user;
		}
		return null;
		
	}

	@PostMapping("/{authenticate}")
	public User findByUserIdAndPassword(@RequestParam String email, @RequestParam String password) {
		return userServices.findByEmailAndPassword(email, password);
	}

	@GetMapping("/{id}")
	public User getUserByid(@PathVariable Long id) {
		return userServices.findById(id);
	}

	@PutMapping("/{id}")
	public User updateUser(@PathVariable Long id, @RequestBody User user) {
		System.out.println("user to update" + user);
		return userServices.updateUserDetails(user);
	}
	
}
