package com.example.demo.services;

import com.example.demo.model.Registration;
import com.example.demo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationServiceImpl implements RegistrationService{

    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration findByCarId(long carId) {
        return registrationRepository.findByCarId(carId);
    }

    public List<Registration> findByOwnersEmail(String email){
        List<Registration> foundedReg = registrationRepository.findByOwnersEmail(email);
        return foundedReg;
    }
}
