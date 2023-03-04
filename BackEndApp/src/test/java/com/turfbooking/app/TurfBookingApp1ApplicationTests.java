package com.turfbooking.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.turfbooking.app.bean.Role;
import com.turfbooking.app.bean.User;
import com.turfbooking.app.repositories.UserRepository;
import com.turfbooking.app.services.UserServices;

@SpringBootTest
class TurfBookingApp1ApplicationTests {

	
	@Autowired
	private UserServices userService;
	
	@Autowired
	private UserRepository userRepo;
	
	@Test
	void contextLoads() {
		
		List<User>allUser = userService.getAllUers();
		System.out.println(allUser);
		assertEquals(0, allUser.size());
	}
	
	@Test
	public void testSaveUser() throws Exception
	{
		User user = new User("Rohit", "Lokhnade","9673707467","Rohit@73",LocalDate.parse("2023-01-01"),"rohitlokhande@gmail.com","Nashik",Role.valueOf("ADMIN"));
		User persitentUser = userRepo.save(user);
		assertEquals(1,persitentUser.getId());
	}

}
