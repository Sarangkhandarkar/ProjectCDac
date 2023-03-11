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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "turf_details")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Validated
public class TurfDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "turf_id")
	private Long turf_id;
	@Column(length = 20,unique = true)
	@NotBlank(message = "Please Enter Turf Name")
	private String name;
	@Column(length = 50)
	@NotBlank(message = "Please Enter address")
	private String address;
	@Column(length = 20)
	private String city;
	private String image;
//@JsonIgnore
	@OneToOne (fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

//	@OneToMany(targetEntity = SportsDetails.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	@JoinColumn(name = "sport_id")
//	private List<SportsDetails> sports;

}
