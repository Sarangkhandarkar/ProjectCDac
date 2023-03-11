package com.turfbooking.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.bean.TimeSlots;
import com.turfbooking.app.services.ISportsService;

@RestController
@RequestMapping("/sports")
@CrossOrigin(origins = "http://localhost:3000")
public class SportsController {

	@Autowired
	private ISportsService sportService;

	@PostMapping("/add")
	public ResponseEntity<SportsDetails> addSorts(@RequestBody @Valid SportsDetails sports) {
		System.out.println("In Sports Add Method");
		return new ResponseEntity<SportsDetails>(sportService.addSport(sports), HttpStatus.CREATED);
	}

	@GetMapping("/{sportsname}")
	public ResponseEntity<?> getSportsByName(@PathVariable String sportsName) {
		System.out.println("In Sports by name ");
		List<SportsDetails> list = sportService.getSportsByName(sportsName);
		if (list.isEmpty())
			return new ResponseEntity<>("Invalid Sports Details !!!!", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PutMapping("/updateSport")
	public SportsDetails updateSports(@RequestBody @Valid SportsDetails detachSport) {
		System.out.println("In Update Sports ");
		return sportService.updateSprts(detachSport);
	}

	@GetMapping("/sportslist")
	public ResponseEntity<?> getAllSports() {
		System.out.println("In Sports list");
		List<SportsDetails> list = sportService.getAllSports();
		if (list.isEmpty())
			return new ResponseEntity<>("Sports List Is Empty !!!!", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@DeleteMapping("/{sport_id}")
	public String deleteSports(@PathVariable Long sport_id) {
		System.out.println("in Sports Delete");
		return sportService.deleteSports(sport_id);
	}
//	@GetMapping("/turf/sports/{turf_id}")
//	public List<SportsDetails> getSportsByTurfId(@PathVariable Long turf_id) {
//		return sportService.getSportsByTurfId(turf_id);
//	}

	@GetMapping("/turf/sports/{turf_id}")
	public ResponseEntity<?> getSportsByTurfId(@PathVariable Long turf_id) {
		List<SportsDetails> sportsList = sportService.getSportsByTurfId(turf_id);
		if(sportsList.isEmpty()) {
			return new ResponseEntity<>("Sports not available!!!!",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(sportsList,HttpStatus.OK);
	}

	@GetMapping("/turf/sports/time/{time_id}")
	public TimeSlots getTimeSlot(@PathVariable Long time_id) {
		return sportService.getTimeSlot(time_id);
	}
}
