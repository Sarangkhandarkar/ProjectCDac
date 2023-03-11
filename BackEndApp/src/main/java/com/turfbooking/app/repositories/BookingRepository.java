package com.turfbooking.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.turfbooking.app.bean.BookingDetails;

public interface BookingRepository extends JpaRepository<BookingDetails, Long>{

}
