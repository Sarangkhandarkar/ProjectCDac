package com.turfbooking.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.repositories.TurfRepository;

@Service
@Transactional
public class TurfDetailsImpl implements TurfService {

	@Autowired
	private TurfRepository turfRepo;
	
	
	@Override
	public TurfDetails addTurf(TurfDetails turf) {
		return turfRepo.save(turf);
	}


	@Override
	public TurfDetails findTurfById(Long Id) {
		
		return turfRepo.findById(Id).get();
	}


	@Override
	public List<TurfDetails> findAllTurf() {
		return turfRepo.findAll();
	}

}
