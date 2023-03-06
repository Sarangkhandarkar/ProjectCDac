package com.turfbooking.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.BookingDetails;
import com.turfbooking.app.services.IBookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private IBookingService bookingService;
	
	@PostMapping("/AddBooking")
	public BookingDetails addBooking(@RequestBody BookingDetails booking)
	{
		return bookingService.addBooking(booking);
	}

}
