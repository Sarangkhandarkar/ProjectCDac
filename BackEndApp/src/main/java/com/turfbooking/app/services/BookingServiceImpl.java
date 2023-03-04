package com.turfbooking.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.BookingDetails;
import com.turfbooking.app.repositories.BookingRepository;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private BookingRepository bookingRepo;
	
	@Override
	public BookingDetails addBooking(BookingDetails booking) {
		return bookingRepo.save(booking);
	}

}
