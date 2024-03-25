package com.example.gateway.controller;

import com.example.gateway.activemq.ActiveMQMessageReceiver;
import com.example.gateway.activemq.ActiveMQMessageSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApiGatewayController {

    private final String userServiceUrl = "http://localhost:8081";
    private final String carServiceUrl = "http://localhost:8082";
    private final ActiveMQMessageSender sender;
    private final ActiveMQMessageReceiver receiver;

    public ApiGatewayController(ActiveMQMessageSender sender, ActiveMQMessageReceiver receiver) {
        this.sender = sender;
        this.receiver = receiver;
    }

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/gateway/users")
    public ResponseEntity<?> getAllUsers() {
        return restTemplate.getForEntity(userServiceUrl + "/users/allUsers", Object.class);
    }

    @PostMapping("/gateway/users/login")
    public ResponseEntity<?> login(@RequestBody Object requestData) {
        return restTemplate.postForEntity(userServiceUrl + "/users/login", requestData, Object.class);
    }

    @GetMapping("/gateway/users/getLoggedUser")
    public ResponseEntity<?> getLoggedUser(@RequestParam("email") String email) {
        return restTemplate.getForEntity(userServiceUrl + "/users/getLoggedUser?email={email}", Object.class, email);
    }

    @GetMapping("/gateway/users/userFromPost")
    public ResponseEntity<?> getUserFromPost(@RequestParam("email") String email) {
        return restTemplate.getForEntity(userServiceUrl + "/users/userFromPost?email={email}", Object.class, email);
    }

    @PostMapping("/gateway/users/registerUser")
    public ResponseEntity<?> saveUser(@RequestBody Object requestBody) {
        return restTemplate.postForEntity(userServiceUrl + "/users/registerUser", requestBody, Object.class);
    }

    @PutMapping("/gateway/users/editUser")
    public ResponseEntity<?> editUser(@RequestBody Object requestBody) {
        restTemplate.put(userServiceUrl + "/users/editUser", requestBody);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/gateway/users/deleteUser")
    public ResponseEntity<?> deleteUser(@RequestBody Object requestBody){
        return restTemplate.postForEntity(userServiceUrl + "/users/deleteUser", requestBody, Object.class);
    }

    @GetMapping("/gateway/cars")
    public ResponseEntity<?> getAllCars() {
        return restTemplate.getForEntity(carServiceUrl + "/cars/allCars", Object.class);
    }

    @GetMapping("/gateway/cars/userCars")
    public ResponseEntity<?> getUserCars(@RequestParam("email") String email) {
        return restTemplate.getForEntity(carServiceUrl + "/cars/userCars?email={email}", Object.class, email);
    }

    @PostMapping("/gateway/cars/registeredCars")
    public ResponseEntity<?> getRegisteredCars(@RequestBody Object requestData) {
        return restTemplate.postForEntity(carServiceUrl + "/cars/registeredCars", requestData, Object.class);
    }

    @GetMapping("/gateway/cars/searchedCars")
    public ResponseEntity<?> getSearchedCars(@RequestParam("text") String text) {
        return restTemplate.getForEntity(carServiceUrl + "/cars/searchedCars?text={text}", Object.class, text);
    }

    @PostMapping("/gateway/cars/uploadPhoto")
    public ResponseEntity<?> uploadPhotoForCar(@RequestParam("image") MultipartFile image, @RequestParam("name") String name) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("image", image.getResource());
        body.add("name", name);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<Boolean> responseEntity = restTemplate.postForEntity(
                carServiceUrl + "/cars/uploadPhoto",
                requestEntity,
                Boolean.class
        );

        return new ResponseEntity<>(responseEntity.getBody(), responseEntity.getStatusCode());
    }

    @PostMapping("/gateway/cars/deleteFolder")
    public ResponseEntity<?> deleteFolderForCar(@RequestBody Object requestData) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Object> requestEntity = new HttpEntity<>(requestData, headers);

        ResponseEntity<Boolean> responseEntity = restTemplate.postForEntity(
                carServiceUrl + "/cars/deleteFolder",
                requestEntity,
                Boolean.class
        );

        return new ResponseEntity<>(responseEntity.getBody(), responseEntity.getStatusCode());
    }

    @PostMapping("/gateway/cars/deletePhoto")
    public ResponseEntity<?> deletePhotoForCar(@RequestParam("image") MultipartFile image, @RequestParam("name") String name) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("image", image.getResource());
        body.add("name", name);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<Boolean> responseEntity = restTemplate.exchange(
                carServiceUrl + "/cars/deletePhoto",
                HttpMethod.POST,
                requestEntity,
                Boolean.class
        );

        return new ResponseEntity<>(responseEntity.getBody(), responseEntity.getStatusCode());
    }

    @PostMapping("/gateway/cars/addCar")
    public ResponseEntity<?> addCar(@RequestBody Object requestBody) {
        return restTemplate.postForEntity(carServiceUrl + "/cars/addCar", requestBody, Object.class);
    }

    @GetMapping("/gateway/cars/openedCar")
    public ResponseEntity<?> getOpenedCars(@RequestParam("id") long id) {
        return restTemplate.getForEntity(carServiceUrl + "/cars/openedCar?id={id}", Object.class, id);
    }

    @GetMapping("/gateway/cars/getById")
    public ResponseEntity<?> getCarById(@RequestParam("id") long id) {
        return restTemplate.getForEntity(carServiceUrl + "/cars/getById?id={id}", Object.class, id);
    }

    @PostMapping("/gateway/cars/deleteCar")
    public ResponseEntity<?> deleteCar(@RequestBody Object requestBody) {
        return restTemplate.postForEntity(carServiceUrl + "/cars/deleteCar", requestBody, Object.class);
    }

    @PutMapping("/gateway/cars/editCar")
    public ResponseEntity<?> editCar(@RequestBody Object requestBody) {
        restTemplate.put(carServiceUrl + "/cars/editCar", requestBody);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/gateway/registrations")
    public ResponseEntity<?> getAllRegistrations() {
        try{
            sender.sendMessage("AllRegistrations");
            Thread.sleep(1000);
            List<?> registrations = receiver.getRegistrations();
            return new ResponseEntity<>(registrations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error at sending message: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/gateway/registrations/getById")
    public ResponseEntity<?> getRegistrationByCarsId(@RequestParam("id") long id) {
        try{
            sender.sendMessage("getByCarsId?id=" + id);
            Thread.sleep(1000);
            Object registration = receiver.getRegistration();
            return new ResponseEntity<>(registration, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error at sending message: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/gateway/registrations/getByOwnersEmail")
    public ResponseEntity<?> getRegistrationByOwnersEmail(@RequestParam("email") String email) {
        try{
            sender.sendMessage("getByEmail?email=" + email);
            Thread.sleep(1000);
            List<?> registrations = receiver.getRegistrations();
            return new ResponseEntity<>(registrations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error at sending message: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/gateway/registrations/saveRegistration")
    public ResponseEntity<?> saveRegistration(@RequestBody Object requestBody) {
        try{
            sender.sendMessage("saveReg/" + requestBody.toString());
            Thread.sleep(2000);
            Object registration = receiver.getRegistration();
            return new ResponseEntity<>(registration, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error at sending message: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
