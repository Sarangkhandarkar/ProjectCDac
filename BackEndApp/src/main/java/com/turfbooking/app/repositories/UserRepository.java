package com.turfbooking.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.turfbooking.app.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	public User findByEmailAndPassword(String email,String pass);
}
