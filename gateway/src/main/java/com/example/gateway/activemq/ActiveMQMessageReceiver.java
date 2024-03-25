package com.example.gateway.activemq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Component
public class ActiveMQMessageReceiver {
    private final String registrationServiceUrl = "http://localhost:8083";
    private List<Object> registrations;
    private Object registration;
    @Autowired
    private RestTemplate restTemplate;

    @JmsListener(destination = "example_QUEUE")
    public void receiveMessage(String message) {
        if(message.equals("AllRegistrations")) {
            registrations = (List<Object>) restTemplate.getForEntity(registrationServiceUrl + "/registrations/getAll", Object.class).getBody();
        } else if(message.contains("getByCarsId")){
            registration = new Object();
            long id = Long.parseLong(message.split("=")[1]);
            registration = restTemplate.getForEntity(registrationServiceUrl + "/registrations/getByCarId?carId={id}", Object.class, id).getBody();
        } else if(message.contains("getByEmail")){
            registration = new Object();
            String email = message.split("=")[1];
            registrations = (List<Object>) restTemplate.getForEntity(registrationServiceUrl + "/registrations/getByOwnersEmail?email={email}", Object.class, email).getBody();
        } else if (message.contains("saveReg")) {
            String content = message.split("/")[1];
            registration = restTemplate.postForEntity(registrationServiceUrl + "/registrations/saveReg", content, Object.class).getBody();
        }
    }

    public List<?> getRegistrations(){
        return registrations;
    }

    public Object getRegistration() {
        return registration;
    }
}
