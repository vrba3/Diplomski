package com.example.carApp.repository;

import com.example.carApp.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    @Query("Select c from Car c where c.id = ?1")
    Car getById(long id);
}
