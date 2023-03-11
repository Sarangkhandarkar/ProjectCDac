package com.turfbooking.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ErrorResponse {
	
	
	private LocalDateTime timeStamp;
	private String message;
	
	public ErrorResponse(String message)
	{
		super();
		this.message = message;
		this.timeStamp = LocalDateTime.now();
	}

}
