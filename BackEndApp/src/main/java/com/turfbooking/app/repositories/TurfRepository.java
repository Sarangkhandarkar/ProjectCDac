package com.turfbooking.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.turfbooking.app.bean.TurfDetails;

@Repository
public interface TurfRepository extends JpaRepository<TurfDetails, Long> {
    
	List<TurfDetails> findTurfByName(String key);
	List<TurfDetails> findTurfByCity(String key);
	//TurfDetails findByUser(Long id);
	TurfDetails findByUser_Id(Long user_id);

}