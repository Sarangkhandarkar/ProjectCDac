package com.turfbooking.app.bean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "booking_details")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Validated
public class BookingDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_id")
	private Long id;

	//@NotNull(message = "Please Enter Date")
	
	//@Pattern(regexp = "^(true|false)$", message = "restartable field allowed input: true or false")
	private boolean booking_status;
	//@Pattern(regexp = "^(true|false)$", message = "restartable field allowed input: true or false")
	private boolean payment_status;
	private String time_slots;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id",nullable = true)
	private User userId;
	
	@OneToOne
	@JoinColumn(name = "sport_id",nullable = true)
	private SportsDetails sportId;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "turf_id",nullable = true)
	private TurfDetails turf_id;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name = "time_id",nullable = true)
	private TimeSlots time_slot;
}
