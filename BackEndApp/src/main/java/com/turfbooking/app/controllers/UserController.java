package com.turfbooking.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.turfbooking.app.dto.LoginRequestDto;
import com.turfbooking.app.services.TurfService;
import com.turfbooking.app.services.UserServices;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
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
	public ResponseEntity<?> findTurfOwnerEmailAndPassword(@RequestParam String email,@RequestParam String password)
	{
		System.out.println("In Turf owner login");
		User user = userServices.findByEmailAndPassword(email, password);
		if(user != null && user.getRole().equals(Role.TURF_OWNER))
		{
			return new ResponseEntity<>(user,HttpStatus.FOUND);
		}
		return new ResponseEntity<>("Inavlid Credentials !!!!",HttpStatus.BAD_REQUEST);
	}

	@PostMapping("/{authenticate}")
	public ResponseEntity<?> findUserByEmailAndPassword(@RequestParam String email,@RequestParam String password) {
		System.out.println("In Validate user");
		User user = userServices.findByEmailAndPassword(email,password);
		if(user != null)
		{
			return new ResponseEntity<>(user,HttpStatus.FOUND);
		}
		
		return new ResponseEntity<>("Invalid Credentials !!!!" , HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserByid(@PathVariable Long id) {
		System.out.println("In FindUser By id");
		return ResponseEntity.ok(userServices.findById(id));
	}

	@PutMapping("/updateuser")
	public String updateUser( @RequestBody User user) {
		System.out.println("user to update" + user);
		return userServices.updateUserDetails(user);
	}
	
}
