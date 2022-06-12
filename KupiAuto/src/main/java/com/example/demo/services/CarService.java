package com.example.demo.services;

import com.example.demo.model.Car;

import java.util.List;

public interface CarService {
    public List<Car> getAllCars();
    public List<Car> getSearchedCars(String text);
    public Car getOpenedCar(long id);
    public List<Car> getUserCars(String email);
    public Boolean deleteCar(Car car);
}
