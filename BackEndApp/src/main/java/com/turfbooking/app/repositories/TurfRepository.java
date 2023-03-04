package com.turfbooking.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.bean.User;

@Repository
public interface TurfRepository extends JpaRepository<TurfDetails, Long> {

}
