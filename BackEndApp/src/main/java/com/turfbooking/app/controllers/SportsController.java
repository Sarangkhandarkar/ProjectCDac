package com.turfbooking.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.services.ISportsService;

@RestController
@RequestMapping("/sports")
public class SportsController {
	
	@Autowired
	private ISportsService sportService;
	
	@PostMapping
	public SportsDetails addSorts(@RequestBody SportsDetails sports)
	{
		return sportService.addSport(sports);
	}
}
