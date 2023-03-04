package com.turfbooking.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.repositories.SportsRepository;

@Service
@Transactional
public class SportsServiceImpl implements ISportsService {

	@Autowired
	private SportsRepository sportsRepo;
	
	@Override
	public SportsDetails addSport(SportsDetails sports) {
		return sportsRepo.save(sports);
	}

}
