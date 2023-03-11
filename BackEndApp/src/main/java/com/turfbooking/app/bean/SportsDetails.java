package com.turfbooking.app.bean;

import javax.persistence.CascadeType;
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
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "sports_details")
@Getter
@Setter
@AllArgsConstructor // (onConstructor=@__({@JsonCreator(mode = JsonCreator.Mode.DELEGATING)})
@NoArgsConstructor
@ToString
//@JsonInclude(Include.NON_DEFAULT)
@Validated
public class SportsDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sport_id")
	private Long sport_id;
	@Column(length = 20)
	@NotNull(message = "Please Enter SportsName")
	private String sportsName;
	@NotNull(message = "Please Enter Players")
	private Integer max_player;
	@NotNull(message = "Please Enter Price")
	private Double price_per_hour;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)//early lazy
	@JoinColumn(name = "turf_id")
	private TurfDetails turfDetails;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)//early lazy
	@JoinColumn(name = "time_id")
	private TimeSlots timeSlots;

}
