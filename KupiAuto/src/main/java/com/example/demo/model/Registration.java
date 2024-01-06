package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="registrations")
public class Registration {

    @Id
    private long id;
    private String registrationNumber;
    private String registrationExpiringDate;
    private long carId;
    private String ownersEmail;

    public Registration() {}

    public Registration(long id, String registrationNumber, String registrationExpiringDate, long carId, String ownersEmail) {
        this.id = id;
        this.registrationNumber = registrationNumber;
        this.registrationExpiringDate = registrationExpiringDate;
        this.carId = carId;
        this.ownersEmail = ownersEmail;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getRegistrationExpiringDate() {
        return registrationExpiringDate;
    }

    public void setRegistrationExpiringDate(String registrationExpiringDate) {
        this.registrationExpiringDate = registrationExpiringDate;
    }

    public long getCarId() {
        return carId;
    }

    public void setCarId(long carId) {
        this.carId = carId;
    }

    public String getOwnersEmail() {
        return ownersEmail;
    }

    public void setOwnersEmail(String ownersEmail) {
        this.ownersEmail = ownersEmail;
    }
}
