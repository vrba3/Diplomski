package com.example.demo.services;

import com.example.demo.model.Car;
import com.example.demo.model.User;
import com.example.demo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarRepository carRepository;

    public List<Car> getAllCars() {
        addPictures();
        addEquipment();
        Iterable<Car> allCars = carRepository.findAll();
        ArrayList<Car> allCarsList = new ArrayList<Car>();
        allCars.forEach(allCarsList::add);

        return allCarsList;
    }

    public List<Car> getUserCars(String email) {
        List<Car> cars = getAllCars();
        List<Car> retCars = new ArrayList<>();
        for(Car c: cars) {
            if(c.getOwnersEmail().equals(email))
                retCars.add(c);
        }

        return retCars;
    }

    private void addEquipment() {
        List<Car> allCars = carRepository.findAll();
        int i=1;
        for(Car car: allCars){
            if(car.getEquipment() == null) {
                if (i % 3 == 0) {
                    ArrayList<String> equipment = new ArrayList<String>();
                    equipment.add("Metalik boja");
                    equipment.add("Tempomat");
                    equipment.add("Svetla za maglu");
                    equipment.add("Navigacija");
                    equipment.add("Električni retrovizori");
                    equipment.add("Kamera");
                    equipment.add("Bluetooth");
                    equipment.add("Krovni nosač");
                    equipment.add("MP3");
                    car.setEquipment(equipment);
                    carRepository.save(car);
                } else if (i % 3 == 1) {
                    ArrayList<String> equipment = new ArrayList<String>();
                    equipment.add("Metalik boja");
                    equipment.add("Tempomat");
                    equipment.add("Svetla za maglu");
                    equipment.add("Krovni nosač");
                    equipment.add("Senzori za svetla");
                    equipment.add("Senzori za kišu");
                    equipment.add("Glasovne komande");
                    equipment.add("Otvor za skije");
                    equipment.add("Automatsko parkiranje");
                    car.setEquipment(equipment);
                    carRepository.save(car);
                } else if (i % 3 == 2) {
                    ArrayList<String> equipment = new ArrayList<String>();
                    equipment.add("Metalik boja");
                    equipment.add("Tempomat");
                    equipment.add("Svetla za maglu");
                    equipment.add("Navigacija");
                    equipment.add("Električni podizači stakala");
                    equipment.add("Multimedija");
                    equipment.add("Kamera");
                    equipment.add("Krovni nosač");
                    equipment.add("MP3");
                    equipment.add("LED prednja svetla");
                    equipment.add("LED zadnja svetla");
                    equipment.add("DPF filter");
                    equipment.add("AUX konekcija");
                    car.setEquipment(equipment);
                    carRepository.save(car);
                }
                i++;
            }
        }
    }

    private void addPictures() {
        List<Car> allCars = carRepository.findAll();
        ArrayList<String> images = new ArrayList<String>();
        images.add("pic1");
        images.add("pic2");
        images.add("pic3");
        images.add("pic4");
        for(Car car : allCars){
            if(car.getImages() == null) {
                if(car.getId() != 13) {
                    car.setImages(images);
                    carRepository.save(car);
                }
            }
        }
    }

    public Car getOpenedCar(long id) {
        Car foundCar = carRepository.findById(id).get();

        return foundCar;
    }

    public Boolean editCar(Car car) {
        Car foundCar = carRepository.findById(car.getId()).get();

        if(foundCar != null) {
            carRepository.save(car);
            return true;
        } else {
            return false;
        }
    }

    public List<Car> getSearchedCars(String text) {
        List<Car> allCars = getAllCars();
        List<Car> retCars = new ArrayList<>();

        String brand = text.split(",")[0];
        String model = text.split(",")[1];
        int price = Integer.parseInt(text.split(",")[2]);
        int startCubic = Integer.parseInt(text.split(",")[3]);
        int endCubic = Integer.parseInt(text.split(",")[4]);
        String startKw = text.split(",")[5];
        String endKw = text.split(",")[6];
        String fuel = text.split(",")[7];
        int startKm = Integer.parseInt(text.split(",")[8]);
        int endKm = Integer.parseInt(text.split(",")[9]);
        String startYear = text.split(",")[10];
        String endYear = text.split(",")[11];
        String transmission = text.split(",")[12];

        retCars = checkBrand(retCars, allCars, brand);
        retCars = checkModel(retCars, model);
        retCars = checkPrice(retCars, price);
        retCars = checkCubic(retCars, startCubic, endCubic);
        retCars = checkKw(retCars, startKw, endKw);
        retCars = checkFuel(retCars, fuel);
        retCars = checkKm(retCars, startKm, endKm);
        retCars = checkYear(retCars, startYear, endYear);
        retCars = checkTransmission(retCars, transmission);

        return retCars;
    }

    private List<Car> checkBrand(List<Car> retCars, List<Car> allCars, String brand) {
        if (brand.equals("-")) {
            for (Car c : allCars) {
                retCars.add(c);
            }
        } else {
            for (Car c : allCars) {
                if(c.getBrand().toLowerCase().equals(brand.toLowerCase()))
                    retCars.add(c);
            }
        }

        return retCars;
    }

    public Boolean deleteCar(Car car) {
        carRepository.deleteById(car.getId());
        return true;
    }

    private List<Car> checkModel(List<Car> retCars, String model) {
        if(!model.equals("-")) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (!car.getModel().toLowerCase().equals(model.toLowerCase()))
                    it.remove();
            }
        }

        return retCars;
    }

    private List<Car> checkPrice(List<Car> retCars, int price) {
        if(price != 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getPrice() > price)
                    it.remove();
            }
        }

        return retCars;
    }

    private List<Car> checkCubic(List<Car> retCars, int startCubic, int endCubic) {
        if(startCubic != 0 && endCubic == 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getCubicCapacity() < startCubic)
                    it.remove();
            }
        } else if(startCubic == 0 && endCubic != 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getCubicCapacity() > endCubic)
                    it.remove();
            }
        } else if(startCubic != 0 && endCubic != 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getCubicCapacity() < startCubic || car.getCubicCapacity() > endCubic)
                    it.remove();
            }
        }

        return retCars;
    }

    private List<Car> checkKw(List<Car> retCars, String startKw, String endKw) {
        if(!startKw.equals("-") && endKw.equals("-")) {
            int startKillowats = getKillowats(startKw);
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getNumOfKw() < startKillowats)
                    it.remove();
            }
        } else if(startKw.equals("-") && !endKw.equals("-")) {
            int endKillowats = getKillowats(endKw);
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getNumOfKw() > endKillowats)
                    it.remove();
            }
        } else if(!startKw.equals("-") && !endKw.equals("-")) {
            int startKillowats = getKillowats(startKw);
            int endKillowats = getKillowats(endKw);
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getNumOfKw() < startKillowats || car.getNumOfKw() > endKillowats)
                    it.remove();
            }
        }

        return retCars;
    }

    private int getKillowats(String kw) {
        if(kw.length() == 4)
            return Integer.parseInt(kw.substring(0, 2));
        else if(kw.length() == 5)
            return Integer.parseInt(kw.substring(0, 3));

        return 0;
    }

    private List<Car> checkFuel(List<Car> retCars, String fuel) {
        if(!fuel.equals("-")) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (!car.getFuel().toLowerCase().equals(fuel.toLowerCase()))
                    it.remove();
            }
        }

        return retCars;
    }

    private List<Car> checkKm(List<Car> retCars, int startKm, int endKm) {
        if(startKm != 0 && endKm == 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getNumOfKilometers() < startKm)
                    it.remove();
            }
        } else if(startKm == 0 && endKm != 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getNumOfKilometers() > endKm)
                    it.remove();
            }
        } else if(startKm != 0 && endKm != 0) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getNumOfKilometers() < startKm || car.getNumOfKilometers() > endKm)
                    it.remove();
            }
        }

        return retCars;
    }

    private List<Car> checkYear(List<Car> retCars, String startYear, String endYear) {
        if(!startYear.equals("-") && endYear.equals("-")) {
            int startY = Integer.parseInt(startYear);
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getYearOfProduction() < startY)
                    it.remove();
            }
        } else if(startYear.equals("-") && !endYear.equals("-")) {
            int endY = Integer.parseInt(endYear);
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getYearOfProduction() > endY)
                    it.remove();
            }
        } else if(!startYear.equals("-") && !endYear.equals("-")) {
            int startY = Integer.parseInt(startYear);
            int endY = Integer.parseInt(endYear);
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (car.getYearOfProduction() < startY || car.getYearOfProduction() > endY)
                    it.remove();
            }
        }

        return retCars;
    }

    private List<Car> checkTransmission(List<Car> retCars, String transmission) {
        if(!transmission.equals("-")) {
            Iterator<Car> it = retCars.iterator();
            while(it.hasNext()) {
                Car car = it.next();
                if (!car.getTransmission().toLowerCase().equals(transmission.toLowerCase()))
                    it.remove();
            }
        }

        return retCars;
    }
}
