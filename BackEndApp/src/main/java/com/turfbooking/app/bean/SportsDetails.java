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
@AllArgsConstructor//(onConstructor=@__({@JsonCreator(mode = JsonCreator.Mode.DELEGATING)})
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
	
	@OneToMany(targetEntity = TimeSlots.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="sports_fk",referencedColumnName = "sport_id")
	private List<TimeSlots> time_slots;
}
