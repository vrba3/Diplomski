package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="cars")
public class Car {

    @Id
    protected long id;
    protected String brand;
    protected String model;
    protected int cubicCapacity;
    protected int numOfKw;
    protected int price;
    protected int yearOfProduction;
    protected String fuel;
    protected int numOfKilometers;
    protected ArrayList<String> images;
    protected String transmission;
    protected ArrayList<String> equipment;
    protected String description;
    protected String ownersEmail;
    protected String numOfChassis;
    protected Boolean approved;

    public Car() {}

    public Car(long id, String brand, String model, int cubicCapacity, int numOfKw, int price, int yearOfProduction, String fuel, int numOfKilometers, ArrayList<String> images, String transmission, ArrayList<String> equipment, String description, String ownersEmail, String numOfChassis, Boolean approved) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.cubicCapacity = cubicCapacity;
        this.numOfKw = numOfKw;
        this.price = price;
        this.yearOfProduction = yearOfProduction;
        this.fuel = fuel;
        this.numOfKilometers = numOfKilometers;
        this.images = images;
        this.transmission = transmission;
        this.equipment = equipment;
        this.description = description;
        this.ownersEmail = ownersEmail;
        this.numOfChassis = numOfChassis;
        this.approved = approved;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getCubicCapacity() {
        return cubicCapacity;
    }

    public void setCubicCapacity(int cubicCapacity) {
        this.cubicCapacity = cubicCapacity;
    }

    public int getNumOfKw() {
        return numOfKw;
    }

    public void setNumOfKw(int numOfKw) {
        this.numOfKw = numOfKw;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getYearOfProduction() {
        return yearOfProduction;
    }

    public void setYearOfProduction(int yearOfProduction) {
        this.yearOfProduction = yearOfProduction;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public int getNumOfKilometers() {
        return numOfKilometers;
    }

    public void setNumOfKilometers(int numOfKilometers) {
        this.numOfKilometers = numOfKilometers;
    }

    public ArrayList<String> getImages() {
        return images;
    }

    public void setImages(ArrayList<String> images) {
        this.images = images;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public ArrayList<String> getEquipment() {
        return equipment;
    }

    public void setEquipment(ArrayList<String> equipment) {
        this.equipment = equipment;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOwnersEmail() {
        return ownersEmail;
    }

    public void setOwnersEmail(String ownersEmail) {
        this.ownersEmail = ownersEmail;
    }

    public String getNumOfChassis() { return numOfChassis; }

    public void setNumOfChassis(String numOfChassis) { this.numOfChassis = numOfChassis; }

    public Boolean getApproved() { return approved; }

    public void setApproved(Boolean approved) { this.approved = approved; }
}
