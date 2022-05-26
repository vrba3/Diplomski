package com.example.demo.services;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarRepository carRepository;

    public List<Car> getAllCars() {
        addPictures();
        Iterable<Car> allCars = carRepository.findAll();
        ArrayList<Car> allCarsList = new ArrayList<Car>();
        allCars.forEach(allCarsList::add);

        return allCarsList;
    }

    private void addPictures() {
        ArrayList<String> images = new ArrayList<String>();
        images.add("pic1");
        images.add("pic2");
        images.add("pic3");
        images.add("pic4");
        for(long i=1; i<=20; i++){
            Car c = carRepository.findById(i).get();
            c.setImages(images);
            carRepository.save(c);
        }
//        Car c1 = carRepository.findById(1L).get();
//        c1.setImages(images);
//        Car c2 = carRepository.findById(2L).get();
//        c2.setImages(images);
//        Car c3 = carRepository.findById(3L).get();
//        c3.setImages(images);
//        Car c4 = carRepository.findById(4L).get();
//        c4.setImages(images);
//        Car c5 = carRepository.findById(5L).get();
//        c5.setImages(images);
//        Car c6 = carRepository.findById(6L).get();
//        c6.setImages(images);
//        Car c7 = carRepository.findById(7L).get();
//        c7.setImages(images);
//        Car c8 = carRepository.findById(8L).get();
//        c8.setImages(images);
//        Car c9 = carRepository.getById(9L);
//        c9.setImages(images);
//        Car c10 = carRepository.getById(10L);
//        c10.setImages(images);
//        Car c11 = carRepository.getById(11L);
//        c11.setImages(images);
//        Car c12 = carRepository.getById(12L);
//        c12.setImages(images);
//        Car c13 = carRepository.getById(13L);
//        c13.setImages(images);
//        Car c14 = carRepository.getById(14L);
//        c14.setImages(images);
//        Car c15 = carRepository.getById(15L);
//        c15.setImages(images);
//        Car c16 = carRepository.getById(16L);
//        c16.setImages(images);
//        Car c17 = carRepository.getById(17L);
//        c17.setImages(images);
//        Car c18 = carRepository.getById(18L);
//        c18.setImages(images);
//        Car c19 = carRepository.getById(19L);
//        c19.setImages(images);
//        Car c20 = carRepository.getById(20L);
//        c20.setImages(images);
//
//        carRepository.save(c1);
//        carRepository.save(c2);
//        carRepository.save(c3);
//        carRepository.save(c4);
//        carRepository.save(c5);
//        carRepository.save(c6);
//        carRepository.save(c7);
//        carRepository.save(c8);
//        carRepository.save(c9);
//        carRepository.save(c10);
//        carRepository.save(c11);
//        carRepository.save(c12);
//        carRepository.save(c13);
//        carRepository.save(c14);
//        carRepository.save(c15);
//        carRepository.save(c16);
//        carRepository.save(c17);
//        carRepository.save(c18);
//        carRepository.save(c19);
//        carRepository.save(c20);
    }
}
