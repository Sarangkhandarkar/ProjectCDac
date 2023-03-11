package com.turfbooking.app.services;

import java.util.List;

import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.bean.TimeSlots;

public interface ISportsService {
	
	SportsDetails addSport(SportsDetails sports);
	
	List<SportsDetails> getAllSports();
	
	List<SportsDetails> getSportsByName(String key);
	
	SportsDetails updateSprts(SportsDetails sports);
	
	String deleteSports(Long id);
	
	List<SportsDetails> getSportsByTurfId(Long turf_id);
	
	TimeSlots getTimeSlot(Long time_id);
 
}
