package com.example.gateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApiGatewayController {

    private final String userServiceUrl = "http://localhost:8081";

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/gateway/users")
    public ResponseEntity<?> getAllUsers() {
        return restTemplate.getForEntity(userServiceUrl + "/users/allUsers", Object.class);
    }

}
