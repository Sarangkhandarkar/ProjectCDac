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
public class TurfDetails {
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "turf_id")
	private Long turf_id;
	@Column(length = 20)
	@NotBlank(message = "Please Enter Turf Name")
	private String turf_name;
	@Column(length = 50)
	@NotBlank(message = "Please Enter address")
	private String address;
	@Column(length = 20)
	private String city;
	private String image;
	
	@OneToOne//(fetch = FetchType.EAGER)
	@JoinColumn(name = "owner_id",nullable = true)
	private User turf_owner_id;
	
	@OneToMany(mappedBy = "turf_id",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<SportsDetails> sports;
	
}
