package com.turfbooking.app.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.customexception.ResourceNotFoundException;
import com.turfbooking.app.repositories.SportsRepository;
import com.turfbooking.app.repositories.TurfRepository;

@Service
@Transactional
public class SportsServiceImpl implements ISportsService {

	@Autowired
	private SportsRepository sportsRepo;
	@Autowired
	private TurfRepository turfRepo;

	@Autowired
	TurfRepository turfRepository;

	@Override
	public SportsDetails addSport(SportsDetails sports) {
		TurfDetails turfdetails = turfRepository.findById(sports.getTurfDetails().getTurf_id()).get();
		sports.setTurfDetails(turfdetails);
		return sportsRepo.save(sports);
	}

	@Override
	public List<SportsDetails> getSportsByName(String key) {
		List<SportsDetails> list = sportsRepo.findSportsBySportsName(key);
		return list;
	}

	@Override
	public SportsDetails updateSprts(SportsDetails sports) {

		if (sportsRepo.existsById(sports.getSport_id()))
			return sportsRepo.save(sports);
		throw new ResourceNotFoundException("Invalid Sports Id : Sports Updation Failed !!!!");
	}

	@Override
	public List<SportsDetails> getAllSports() {

		return sportsRepo.findAll();
	}

	@Override
	public String deleteSports(Long id) {

		if (sportsRepo.existsById(id)) {
			sportsRepo.deleteById(id);
			return "Sports Details Deleted Successfully !!!!";
		}
		return "Deletion of Sports Details is Failed !!!!";
	}

	@Override
	public List<SportsDetails> getSportsByTurfId(Long turf_id) {
		TurfDetails turf = turfRepo.findById(turf_id).get();
		return sportsRepo.findSportsByTurfDetails(turf);
	}

}
