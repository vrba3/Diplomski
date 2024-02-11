package com.example.regApp.repository;

import com.example.regApp.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    @Query("Select r from Registration r where r.carId = ?1")
    Registration findByCarId(long carId);
    @Query("Select r from Registration r where r.ownersEmail = ?1")
    List<Registration> findByOwnersEmail(String email);
}
