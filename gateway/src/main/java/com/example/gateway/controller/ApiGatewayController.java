package com.example.gateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/gateway/users/login")
    public ResponseEntity<?> login(@RequestBody Object requestData) {
        return restTemplate.postForEntity(userServiceUrl + "/users/login", requestData, Object.class);
    }

    @GetMapping("/gateway/users/getLoggedUser")
    public ResponseEntity<?> getLoggedUser(@RequestParam("email") String email) {
        return restTemplate.getForEntity(userServiceUrl + "/users/getLoggedUser?email={email}", Object.class, email);
    }

    @GetMapping("/gateway/users/userFromPost")
    public ResponseEntity<?> getUserFromPost(@RequestParam("email") String email) {
        return restTemplate.getForEntity(userServiceUrl + "/users/userFromPost?email={email}", Object.class, email);
    }

    @PostMapping("/gateway/users/registerUser")
    public ResponseEntity<?> saveUser(@RequestBody Object requestBody) {
        return restTemplate.postForEntity(userServiceUrl + "/users/registerUser", requestBody, Object.class);
    }

    @PutMapping("/gateway/users/editUser")
    public ResponseEntity<?> editUser(@RequestBody Object requestBody) {
        restTemplate.put(userServiceUrl + "/users/editUser", requestBody);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/gateway/users/deleteUser")
    public ResponseEntity<?> deleteUser(@RequestBody Object requestBody){
        return restTemplate.postForEntity(userServiceUrl + "/users/deleteUser", requestBody, Object.class);
    }
}
