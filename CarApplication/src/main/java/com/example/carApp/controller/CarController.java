package com.example.carApp.controller;

import com.example.carApp.dto.StripeChargeDTO;
import com.example.carApp.model.Car;
import com.example.carApp.service.CarService;
import com.example.carApp.service.StripeService;
import com.stripe.exception.StripeException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class CarController {

    @Autowired
    private CarService carService;

    private final StripeService stripeService;

    @GetMapping("cars/allCars")
    public ResponseEntity<List<Car>> getAllCars() {
        return new ResponseEntity<>(carService.getAllCars(), HttpStatus.OK);
    }

    @GetMapping("cars/userCars")
    public ResponseEntity<List<Car>> getUserCars(@RequestParam("email") String email) {
        return new ResponseEntity<>(carService.getUserCars(email), HttpStatus.OK);
    }

    @PostMapping("cars/registeredCars")
    public ResponseEntity<List<Car>> getRegisteredCars(@RequestBody List<Long> registeredCarIDs) {
        return new ResponseEntity<>(carService.getRegisteredCars(registeredCarIDs), HttpStatus.OK);
    }

    @GetMapping("cars/searchedCars")
    public ResponseEntity<List<Car>> getSearchedCars(@RequestParam("text") String text) {
        return new ResponseEntity<>(carService.getSearchedCars(text), HttpStatus.OK);
    }

    @PostMapping("cars/uploadPhoto")
    public ResponseEntity<Boolean> uploadPhoto(@RequestParam("image") MultipartFile image, @RequestParam("name") String name) throws IOException {
        if(carService.uploadPhoto(image, name)){
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @PostMapping("/cars/deleteFolder")
    public ResponseEntity<Boolean> deleteFolder(@RequestBody Car car) throws IOException {
        if (carService.deleteFolder(Long.toString(car.getId()))) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @PostMapping("cars/deletePhoto")
    public ResponseEntity<Boolean> deletePhoto(@RequestParam("image") MultipartFile image, @RequestParam("name") String name) throws IOException {
        if(carService.deletePhoto(image, name)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @PostMapping("/cars/addCar")
    public ResponseEntity<Car> addCar(@RequestBody Car car){
        return new ResponseEntity<>(carService.addCar(car), HttpStatus.OK);
    }

    @GetMapping("cars/openedCar")
    public ResponseEntity<Car> getOpenedCars(@RequestParam("id") long id) {
        return new ResponseEntity<>(carService.getOpenedCar(id), HttpStatus.OK);
    }

    @GetMapping("cars/getById")
    public ResponseEntity<Car> getById(@RequestParam("id") long id) {
        return new ResponseEntity<>(carService.getById(id), HttpStatus.OK);
    }

    @PostMapping("cars/deleteCar")
    public ResponseEntity<Boolean> deleteCar(@RequestBody Car car){
        return new ResponseEntity<>(carService.deleteCar(car), HttpStatus.OK);
    }

    @PutMapping("/cars/editCar")
    public ResponseEntity<Boolean> editCar(@RequestBody Car car) {
        if (carService.editCar(car)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @PostMapping("stripe/charge")
    public StripeChargeDTO charge(@RequestBody StripeChargeDTO model) throws StripeException {
        return stripeService.chargePayment(model);
    }
}
