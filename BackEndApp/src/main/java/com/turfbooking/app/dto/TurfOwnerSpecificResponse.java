package com.turfbooking.app.dto;

import java.time.LocalDate;

import com.turfbooking.app.bean.Role;
import com.turfbooking.app.bean.TurfDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TurfOwnerSpecificResponse {
	private Long id;
	private String first_name;
	private String last_name;
	private String contact_no;
	private LocalDate date_of_registration;
	private String email;
	private String location;
	private Role role;
	
	private TurfDetails turf;
}
