package com.turfbooking.app.services;

import java.util.List;
import java.util.Optional;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.bean.User;
import com.turfbooking.app.customexception.ResourceNotFoundException;
import com.turfbooking.app.dto.LoginRequestDto;

public interface TurfService  {

	TurfDetails addTurf(TurfDetails turf);
	
	TurfDetails findTurfById(Long id);
	
	List<TurfDetails> findAllTurf();
	
	List<TurfDetails> getTurfByName(String key);
	
	List<TurfDetails> getTurfByCity(String key);
	
	TurfDetails getByOwnerId(Long user_id);
	
	TurfDetails updateTurf(TurfDetails turf);
}
