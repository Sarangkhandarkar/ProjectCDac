package com.turfbooking.app.bean;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.UniqueElements;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor

@NoArgsConstructor
@ToString(exclude = "password")
@Entity
@Table(name = "user_table")
public class User {

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;
	@NotNull
	@Column(length = 20)
	@NotBlank(message = "Please Enter First Name")
	private String first_name;
	@NotNull
	@Column(length = 20)
	@NotBlank(message = "Please Enter Last Name")
	private String last_name;
	@Pattern(regexp = "(^$|[0-9]{10})")
	@NotNull
	@Size(min = 10, max = 10)
	@NotBlank(message = "Please Enter Phone Number")
	private String contact_no;
	@NotNull
	@Column(length = 20, nullable = false)
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	//@NotNull(message = "Please Enter Date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate date_of_registration;
	@Email(message = "Please Enter Valid Email")
	@NotBlank(message = "Plase Enter Email")
	@Column(unique = true, nullable = false)
	private String email;
	@NotNull
	@NotBlank(message = "Please Enter City")
	private String location;
	@Enumerated(EnumType.STRING)
	@NotNull
	private Role role;
	
	public User(@NotNull @NotBlank(message = "Please Enter First Name") String first_name,
			@NotNull @NotBlank(message = "Please Enter Last Name") String last_name,
			@Pattern(regexp = "(^$|[0-9]{10})") @NotNull @Size(min = 10, max = 10) @NotBlank(message = "Please Enter Phone Number") String contact_no,
			@NotNull String password, @NotNull(message = "Please Enter Date") LocalDate date_of_registration,
			@Email(message = "Please Enter Valid Email") @NotBlank(message = "Plase Enter Email") String email,
			@NotNull @NotBlank(message = "Please Enter City") String location, @NotNull Role role) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact_no = contact_no;
		this.password = password;
		this.date_of_registration = date_of_registration;
		this.email = email;
		this.location = location;
		this.role = role;
	}
	
	

	/*
	 * public User(@NotNull @NotBlank(message = "Please Enter First Name") String
	 * first_name,
	 * 
	 * @NotNull @NotBlank(message = "Please Enter Last Name") String last_name,
	 * 
	 * @Pattern(regexp = "(^$|[0-9]{10})") @NotNull @Size(min = 10, max =
	 * 10) @NotBlank(message = "Please Enter Phone Number") String contact_no,
	 * 
	 * @NotNull String password, @NotNull(message = "Please Enter Date") LocalDate
	 * date_of_registration,
	 * 
	 * @NotNull @Email(message = "Please Enter Valid Email") @NotBlank(message =
	 * "Plase Enter Email") String email,
	 * 
	 * @NotNull @NotBlank(message = "Please Enter City") String location, @NotNull
	 * Role role) { super(); this.first_name = first_name; this.last_name =
	 * last_name; this.contact_no = contact_no; this.password = password;
	 * this.date_of_registration = date_of_registration; this.email = email;
	 * this.location = location; this.role = role; }
	 */

}
