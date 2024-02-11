package com.example.carApp.service;

import com.example.carApp.model.Car;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ICarService {
    List<Car> getAllCars();
    List<Car> getSearchedCars(String text);
    Car getOpenedCar(long id);
    List<Car> getUserCars(String email);
    Boolean deleteCar(Car car);
    Boolean editCar(Car car);
    Car addCar(Car car);
    boolean uploadPhoto(MultipartFile image, String name) throws IOException;
    Boolean deleteFolder(String name) throws IOException;
    Boolean deletePhoto(MultipartFile image, String name) throws IOException;
    Car getById(long id);
    List<Car> getRegisteredCars(List<Long> registeredCarIDs);
}
