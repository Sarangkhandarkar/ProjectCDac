package com.turfbooking.app.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "sports_details")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SportsDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sport_id")
	private Long sport_id;
	@Column(length = 20)
	@NotBlank(message = "Please Enter SportsName")
	private String sport_name;
	@NotBlank(message = "Please Enter Players")
	private Integer max_player;
	@NotBlank(message = "Please Enter Price")
	private Double price_per_hour;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "turf_id",nullable = true)
	private TurfDetails turf_id;

	@OneToMany(mappedBy = "sportDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<TimeSlots> time_Slots;
}
