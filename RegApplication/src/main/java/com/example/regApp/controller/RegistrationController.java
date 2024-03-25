package com.example.regApp.controller;

import com.example.regApp.model.Registration;
import com.example.regApp.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @GetMapping("registrations/getByCarId")
    public ResponseEntity<Registration> getByCarId(@RequestParam("carId") long carId) {
        return new ResponseEntity<>(registrationService.findByCarId(carId), HttpStatus.OK);
    }

    @GetMapping("registrations/getByOwnersEmail")
    public ResponseEntity<List<Registration>> getByOwnersEmail(@RequestParam("email") String email) {
        return new ResponseEntity<>(registrationService.findByOwnersEmail(email), HttpStatus.OK);
    }

    @PostMapping("/registrations/saveReg")
    public ResponseEntity<Registration> addRegistration(@RequestBody String request){
        String registrationContent = request.substring(1, request.length()-1);
        String[] partsOfContent = registrationContent.split(",");
        Registration registration = new Registration(
                Long.parseLong(partsOfContent[0].split("=")[1]),
                partsOfContent[1].split("=")[1],
                partsOfContent[2].split("=")[1],
                Long.parseLong(partsOfContent[3].split("=")[1]),
                partsOfContent[4].split("=")[1]
        );
        return new ResponseEntity<>(registrationService.save(registration), HttpStatus.OK);
    }

    @GetMapping("/registrations/getAll")
    public ResponseEntity<List<Registration>> getAll() {
        return new ResponseEntity<>(registrationService.getAll(), HttpStatus.OK);
    }
}
