package com.example.demo.controller;

import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin (origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService ;
}
