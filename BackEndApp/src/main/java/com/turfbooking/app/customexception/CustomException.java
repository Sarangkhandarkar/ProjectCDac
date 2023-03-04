package com.turfbooking.app.customexception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.turfbooking.app.dto.ErrorResponse;

@ControllerAdvice
public class CustomException extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler (RuntimeException.class)
	public static ResponseEntity<?> handleRunTimeException (RuntimeException e)
	{
		System.out.println("==> In handleRunTimeException");
		ErrorResponse resp = new ErrorResponse(e.getMessage(),LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}
	
	

}
