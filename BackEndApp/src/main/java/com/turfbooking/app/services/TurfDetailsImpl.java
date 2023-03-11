package com.turfbooking.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.bean.User;
import com.turfbooking.app.customexception.ResourceNotFoundException;
import com.turfbooking.app.dto.LoginRequestDto;
import com.turfbooking.app.repositories.TurfRepository;
import com.turfbooking.app.repositories.UserRepository;

@Service
@Transactional
public class TurfDetailsImpl implements TurfService {

	@Autowired
	private TurfRepository turfRepo;
	
	@Autowired
	UserRepository userRepository;
	

	@Override
	public TurfDetails addTurf(TurfDetails turf) {
		User user =  userRepository.findById(turf.getUser().getId()).get(); 
		turf.setUser(user);
		return turfRepo.save(turf);
	}

	@Override
	public TurfDetails findTurfById(Long Id)   {

		return turfRepo.findById(Id).orElseThrow(()-> new ResourceNotFoundException("Invalid Id !!!! "));
		
	}

	@Override
	public List<TurfDetails> findAllTurf() {
		return turfRepo.findAll();
	}

	@Override
	public List<TurfDetails> getTurfByName(String key) {
		List<TurfDetails> list = turfRepo.findTurfByName(key);
		return list;
	}

	@Override
	public List<TurfDetails> getTurfByCity(String key) {
		return turfRepo.findTurfByCity(key);
	}

	@Override
	public TurfDetails updateTurf(TurfDetails turf) {
		
		if(turfRepo.existsById(turf.getTurf_id()))
			return turfRepo.save(turf);
		throw new ResourceNotFoundException("Invalid Turf Id : Updation Failed !!!");
	}

	@Override
	public TurfDetails getByOwnerId(Long user_id) {				
		return turfRepo.findByUser_Id(user_id);
	}
}
