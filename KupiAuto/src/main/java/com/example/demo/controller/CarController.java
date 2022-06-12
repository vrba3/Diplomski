package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.model.User;
import com.example.demo.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("cars/userCars")
    public ResponseEntity<List<Car>> getUserCars(@RequestParam("email") String email) {
        return new ResponseEntity<List<Car>>(carService.getUserCars(email), HttpStatus.OK);
    }

    @GetMapping("cars/searchedCars")
    public ResponseEntity<List<Car>> getSearchedCars(@RequestParam("text") String text) {
        return new ResponseEntity<List<Car>>(carService.getSearchedCars(text), HttpStatus.OK);
    }

    @GetMapping("cars/openedCar")
    public ResponseEntity<Car> getOpenedCars(@RequestParam("id") long id) {
        return new ResponseEntity<Car>(carService.getOpenedCar(id), HttpStatus.OK);
    }

    @PostMapping("cars/deleteCar")
    public ResponseEntity<Boolean> deleteCar(@RequestBody Car car){
        return new ResponseEntity<Boolean>(carService.deleteCar(car), HttpStatus.OK);
    }
}
