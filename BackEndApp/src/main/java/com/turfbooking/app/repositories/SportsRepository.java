package com.turfbooking.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.turfbooking.app.bean.SportsDetails;

@Repository
public interface SportsRepository extends JpaRepository<SportsDetails, Long> {
	
	List<SportsDetails> findSportsBySportsName(String key);

}
