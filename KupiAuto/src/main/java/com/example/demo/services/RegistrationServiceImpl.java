package com.example.demo.services;

import com.example.demo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationServiceImpl implements RegistrationService{

    @Autowired
    private RegistrationRepository registrationRepository;
}
