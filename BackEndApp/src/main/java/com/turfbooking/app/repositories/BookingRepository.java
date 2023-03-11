package com.turfbooking.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.turfbooking.app.bean.BookingDetails;
import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.bean.TurfDetails;

public interface BookingRepository extends JpaRepository<BookingDetails, Long>{
	
	List<SportsDetails> findSportsByTurfDetails(TurfDetails turf);

	List<BookingDetails> findBookingByUser_id();
}
