package com.turfbooking.app.customexception;

public class ResourceNotFoundException extends RuntimeException{
	
	public ResourceNotFoundException(String messsage)
	{
		super(messsage);
	}

}
