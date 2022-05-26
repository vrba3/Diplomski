package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.model.User;
import com.example.demo.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("cars/allCars")
    public ResponseEntity<List<Car>> getAllCars() {
        return new ResponseEntity<List<Car>>(carService.getAllCars(), HttpStatus.OK);
    }
}
