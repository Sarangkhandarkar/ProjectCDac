package com.turfbooking.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.services.TurfService;

@RestController
@RequestMapping("/turf")
public class TurfController {
	
	
	@Autowired
	private TurfService turfService;
	
	public TurfController()
	{
		System.out.println("in Ctor of " + getClass().getName());
	}
	
	@PostMapping
	public TurfDetails addTurf(@RequestBody TurfDetails turf)
	{
	     return turfService.addTurf(turf);	
	}
	
	@GetMapping("/turf/{turf_id}")
	public TurfDetails getTurfById(@PathVariable Long turf_id) throws Exception
	{
		TurfDetails turf = turfService.findTurfById(turf_id);
		if(turf==null)
		{
			throw new Exception("Turf Not Found: " + turf_id);
			
		}
		return turf;
	}
	
	@GetMapping("/turflist")
	public List<TurfDetails> findAll(){
		return turfService.findAllTurf();
	}
	
	@GetMapping("/{name}")
	public List<TurfDetails> getTurfByName(@PathVariable String name){
		return turfService.getTurfByName(name);
	}
	
	@GetMapping("/turf/city/{city}")
	public List<TurfDetails> getTurfByCity(@PathVariable String city)
	{
		return turfService.getTurfByCity(city);
	}
	
}
