package com.example.demo.services;

import com.example.demo.model.Car;
import com.example.demo.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CarService {
    public List<Car> getAllCars();
    public List<Car> getSearchedCars(String text);
    public Car getOpenedCar(long id);
    public List<Car> getUserCars(String email);
    public Boolean deleteCar(Car car);
    public Boolean editCar(Car car);
    public Boolean addCar(Car car);
    public boolean uploadPhoto(MultipartFile image, String name) throws IOException;
    public Boolean deleteFolder(String name) throws IOException;
    public Boolean deletePhoto(MultipartFile image, String name) throws IOException;
}
