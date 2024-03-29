package com.example.userApp.controller;

import com.example.userApp.model.User;
import com.example.userApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService ;

    @GetMapping("users/allUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping("/users/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return new ResponseEntity<>( userService.loginUser(user), HttpStatus.OK);
    }

    @GetMapping("/users/getLoggedUser")
    public ResponseEntity<User> getLoggedUser(@RequestParam("email") String email) {
        return new ResponseEntity<>(userService.getLoggedUser(email), HttpStatus.OK);
    }

    @GetMapping("/users/userFromPost")
    public ResponseEntity<User> getUserFromPost(@RequestParam("email") String email) {
        return new ResponseEntity<>(userService.getLoggedUser(email), HttpStatus.OK);
    }

    @PostMapping("/users/registerUser")
    public ResponseEntity<Boolean> saveUser(@RequestBody User user) {

        if(!userService.saveUser(user)){
            return new ResponseEntity<>(false,HttpStatus.NOT_ACCEPTABLE);
        }
        else{
            return new ResponseEntity<>(true,HttpStatus.CREATED);
        }
    }

    @PutMapping("/users/editUser")
    public ResponseEntity<Boolean> editUser(@RequestBody User user) {
        if (userService.editUser(user)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @PostMapping("/users/deleteUser")
    public ResponseEntity<Boolean> deleteUser(@RequestBody User user){
        return new ResponseEntity<>(userService.deleteUser(user), HttpStatus.OK);
    }
}
