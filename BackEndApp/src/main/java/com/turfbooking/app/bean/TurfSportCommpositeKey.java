package com.turfbooking.app.bean;

import java.io.Serializable;

import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class TurfSportCommpositeKey implements Serializable {

	@Id
	private Long turf_id;
	@Id
	private Long sport_id;
}
