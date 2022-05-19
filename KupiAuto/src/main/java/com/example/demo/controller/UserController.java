package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.services.UserService;
import com.fasterxml.jackson.annotation.JsonPropertyDescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService ;

    @PostMapping("/users/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return new ResponseEntity<User>( userService.loginUser(user), HttpStatus.OK);
    }

    @GetMapping("/users/getLoggedUser")
    public ResponseEntity<User> getLoggedUser(@RequestParam("email") String email) {
        return new ResponseEntity<User>(userService.getLoggedUser(email), HttpStatus.OK);
    }
}
