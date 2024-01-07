package com.example.demo.controller;

import com.example.demo.model.Registration;
import com.example.demo.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @GetMapping("registrations/getByCarId")
    public ResponseEntity<Registration> getByCarId(@RequestParam("carId") long carId) {
        return new ResponseEntity<>(registrationService.findByCarId(carId), HttpStatus.OK);
    }

    @GetMapping("registrations/getByOwnersEmail")
    public ResponseEntity<List<Registration>> getByOwnersEmail(@RequestParam("email") String email) {
        return new ResponseEntity<>(registrationService.findByOwnersEmail(email), HttpStatus.OK);
    }
}
