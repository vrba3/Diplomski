package com.example.demo.services;

import com.example.demo.model.Registration;

import java.util.List;

public interface RegistrationService {
    Registration findByCarId(long carId);
    List<Registration> findByOwnersEmail(String email);
}
