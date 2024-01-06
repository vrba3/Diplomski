package com.example.demo.repository;

import com.example.demo.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    @Query("Select r from Registration r where r.carId = ?1")
    public Registration findByCarId(long carId);
}
