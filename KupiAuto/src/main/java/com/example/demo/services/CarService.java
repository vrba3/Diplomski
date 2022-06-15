package com.example.demo.services;

import com.example.demo.model.Car;
import com.example.demo.model.User;

import java.util.List;

public interface CarService {
    public List<Car> getAllCars();
    public List<Car> getSearchedCars(String text);
    public Car getOpenedCar(long id);
    public List<Car> getUserCars(String email);
    public Boolean deleteCar(Car car);
    public Boolean editCar(Car car);
}
