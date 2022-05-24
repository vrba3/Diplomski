package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.services.UserService;
import com.fasterxml.jackson.annotation.JsonPropertyDescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService ;

    @GetMapping("users/allUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping("/users/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return new ResponseEntity<User>( userService.loginUser(user), HttpStatus.OK);
    }

    @GetMapping("/users/getLoggedUser")
    public ResponseEntity<User> getLoggedUser(@RequestParam("email") String email) {
        return new ResponseEntity<User>(userService.getLoggedUser(email), HttpStatus.OK);
    }

    @PostMapping("/users/registerUser")
    public ResponseEntity<String> saveUser(@RequestBody User user) {

        if(!userService.saveUser(user)){
            return new ResponseEntity<String>("user_exists",HttpStatus.NOT_ACCEPTABLE);
        }
        else{
            return new ResponseEntity<String>("user_registered",HttpStatus.CREATED);
        }
    }

    @PutMapping("/users/editUser")
    public ResponseEntity<Boolean> editUser(@RequestBody User user, HttpServletRequest request) {
        if (userService.editUser(user)) {
            return new ResponseEntity<Boolean>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<Boolean>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
