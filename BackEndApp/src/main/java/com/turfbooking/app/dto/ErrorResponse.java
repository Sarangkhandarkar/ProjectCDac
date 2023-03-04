package com.turfbooking.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ErrorResponse {
	
	private String message;
	private LocalDateTime timestamp;
	
	public ErrorResponse (String message , LocalDateTime timestamp)
	{
		super();
		this.message = message;
		this.timestamp = timestamp;
	}

}
