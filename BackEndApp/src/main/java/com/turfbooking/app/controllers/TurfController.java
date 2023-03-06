package com.turfbooking.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.services.TurfService;

@RestController
@RequestMapping("/turf")
@CrossOrigin(origins = "http://localhost:3000")
public class TurfController {
	
	
	@Autowired
	private TurfService turfService;
	
	public TurfController()
	{
		System.out.println("in Ctor of " + getClass().getName());
	}
	
	@PostMapping
	public ResponseEntity<TurfDetails> addTurf(@RequestBody @Valid TurfDetails turf)
	{
		System.out.println("In Save Turf " + turf);
		
	     return new ResponseEntity<TurfDetails>(turfService.addTurf(turf),HttpStatus.CREATED);
	}
	
	@GetMapping("/turf/{turf_id}")
	public ResponseEntity<?> getTurfById(@PathVariable Long turf_id)  
	{
		System.out.println("In turf by id");
		return ResponseEntity.ok(turfService.findTurfById(turf_id));
		 
	}
		
	@GetMapping("/turflist")
	public ResponseEntity<?> findAll(){
		System.out.println("in list turfs");
		List<TurfDetails> list = turfService.findAllTurf();
		if(list.isEmpty())
			return new ResponseEntity<>("Empty Turf list !!!!" ,HttpStatus.NOT_FOUND );
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<?> getTurfByName(@PathVariable String name){
		System.out.println("In turf list by name");
		List<TurfDetails> list = turfService.getTurfByName(name);
		if(list.isEmpty())
			return new ResponseEntity<>("Invalid Turf Name!!!!",HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@GetMapping("/turf/city/{city}")
	public ResponseEntity<?> getTurfByCity(@PathVariable String city)
	{
		System.out.println("In Turf list By city");
		List<TurfDetails> list = turfService.getTurfByCity(city);
		if(list.isEmpty())
			return new ResponseEntity<>("Invalid Turf City Name!!!!",HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@PutMapping("/updateturf")
	public TurfDetails updateTurfDetails(@RequestBody TurfDetails turf)
	{
		System.out.println("In Update Turf ");
		return turfService.updateTurf(turf);
	}
	
	
	
}
