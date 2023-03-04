package com.turfbooking.app.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "time_slots")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TimeSlots {

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "time_id")
	private Long time_id;
	@NotBlank(message = "Please Enter Time Slot")
	private String time_slot;
	
	private boolean bokking_status;
	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "turf_id") private TurfDetails turf_id;
	 */
//	@OneToOne
//	@JoinColumn(name = "sports_id",nullable = true)
//	private SportsDetails sports_id;
//	
}
