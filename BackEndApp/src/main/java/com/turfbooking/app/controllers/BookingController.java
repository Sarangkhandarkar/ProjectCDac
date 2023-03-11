package com.turfbooking.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.BookingDetails;
import com.turfbooking.app.services.IBookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

	@Autowired
	private IBookingService bookingService;

	@PostMapping("/addbooking")
	public BookingDetails addBooking(@RequestBody BookingDetails booking) {
		// System.out.println(booking.);
		return bookingService.addBooking(booking);
	}

//	@GetMapping("{user_id}")
//	public List<BookingDetails> getBookings(@PathVariable Long user_id) {
//		return null;
//	}

	@GetMapping("/{user_id}")
	public ResponseEntity<?> getBookings(@PathVariable Long user_id) {
		List<BookingDetails> bookingDetails = bookingService.getBookings(user_id);
		if (bookingDetails.isEmpty()) {
			return new ResponseEntity<>("No bookings", HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(bookingDetails, HttpStatus.OK);
	}

}
