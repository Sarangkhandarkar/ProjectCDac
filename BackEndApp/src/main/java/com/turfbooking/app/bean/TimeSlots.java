package com.turfbooking.app.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;

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
@Validated
public class TimeSlots {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "time_id")
	private Long time_id;
	//@NotBlank(message = "Please Enter Time Slot")
	//private String time_slot;
	
	//private boolean bokking_status;
	private boolean _9to_10 = false;
	private boolean _10to_11 = false;
	private boolean _11to_12 = false;
	private boolean _12to_13 = false;
	private boolean _13to_14 = false;
	private boolean _14to_15 = false;
	
//	
//	@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
//	@JoinColumn(name = "sport_id")
//	private List<TimeSlots> time_slots;
	
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
