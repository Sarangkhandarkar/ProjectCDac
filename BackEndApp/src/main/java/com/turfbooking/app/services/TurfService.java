package com.turfbooking.app.services;

import java.util.List;

import com.turfbooking.app.bean.TurfDetails;

public interface TurfService  {

	TurfDetails addTurf(TurfDetails turf);
	
	TurfDetails findTurfById(Long id);
	
	List<TurfDetails> findAllTurf();
	
	List<TurfDetails> getTurfByName(String key);
	
	List<TurfDetails> getTurfByCity(String key);
}
