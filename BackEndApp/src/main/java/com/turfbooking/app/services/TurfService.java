package com.turfbooking.app.services;

import java.util.List;
import java.util.Optional;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.customexception.ResourceNotFoundException;

public interface TurfService  {

	TurfDetails addTurf(TurfDetails turf);
	
	TurfDetails findTurfById(Long id);
	
	List<TurfDetails> findAllTurf();
	
	List<TurfDetails> getTurfByName(String key);
	
	List<TurfDetails> getTurfByCity(String key);
	
	TurfDetails updateTurf(TurfDetails turf);
}
