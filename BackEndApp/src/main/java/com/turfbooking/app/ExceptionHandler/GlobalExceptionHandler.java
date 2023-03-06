package com.turfbooking.app.ExceptionHandler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.turfbooking.app.customexception.ResourceNotFoundException;
import com.turfbooking.app.dto.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e)
	{
		System.out.println("In Handle MethodArgumentNotValidException " + e);
		List<FieldError> list = e.getFieldErrors();
		Map<String,String> map = list.stream().collect(Collectors.toMap(FieldError::getField,FieldError::getDefaultMessage));
		
		return new ResponseEntity<>(map,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e)
	{
		System.out.println("in catch-all run time exc " + e);
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(e.getMessage()));
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleException(Exception e)
	{
		System.out.println("In Catach Exception " + e);
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(e.getMessage()));
	}

}
