package com.turfbooking.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.turfbooking.app.bean.BookingDetails;
import com.turfbooking.app.bean.User;

public interface BookingRepository extends JpaRepository<BookingDetails, Long> {

	List<BookingDetails> findBookingsByUserId(User id);

}
