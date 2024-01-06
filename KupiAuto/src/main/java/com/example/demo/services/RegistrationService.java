package com.example.demo.services;

import com.example.demo.model.Registration;

public interface RegistrationService {
    public Registration findByCarId(long carId);
}
