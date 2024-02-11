package com.example.regApp.service;

import com.example.regApp.model.Registration;

import java.util.List;

public interface IRegistrationService {
    Registration findByCarId(long carId);
    List<Registration> findByOwnersEmail(String email);
    Registration save(Registration registration);
    List<Registration> getAll();
}
