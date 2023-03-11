package com.turfbooking.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.turfbooking.app.bean.TimeSlots;

public interface TimeSlotRepository extends JpaRepository<TimeSlots, Long> {

}
