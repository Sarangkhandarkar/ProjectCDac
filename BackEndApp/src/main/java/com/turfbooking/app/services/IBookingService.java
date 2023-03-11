package com.turfbooking.app.services;

import java.util.List;

import com.turfbooking.app.bean.BookingDetails;

public interface IBookingService {

	BookingDetails addBooking(BookingDetails booking);

	List<BookingDetails> getBookings(Long usr_id);

}
