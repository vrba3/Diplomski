package com.example.demo.services;

import com.example.demo.model.Car;
import com.example.demo.model.User;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private CarService carService;
    @Autowired
    private CarRepository carRepository;

    public List<User> getAllUsers() {
        Iterable<User> allUsers = userRepository.findAll();
        ArrayList<User> allUsersList = new ArrayList<User>();
        allUsers.forEach(allUsersList::add);

        return allUsersList;
    }

    public User loginUser(User user) {
        User foundUser = userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());

        if (foundUser != null)
            return foundUser;
        else
            return null;
    }

    public User getLoggedUser(String email) {
        User foundUser = userRepository.findByEmail(email);

        return foundUser;
    }

    public Boolean saveUser(User user) {
        User checkUser = userRepository.findByEmail(user.getEmail());

        if(checkUser != null)
            return false;

        userRepository.save(user);
        sendEmail("Your account has been created!", user.getEmail());
        return true;
    }

    public Boolean editUser(User user) {
        User foundUser = userRepository.findByEmail(user.getEmail());

        if(foundUser != null) {
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public Boolean deleteUser(User user) {
        sendEmail("Your account has been deleted!", user.getEmail());
        List<Car> cars = carService.getAllCars();
        for(Car c: cars) {
            if(c.getOwnersEmail().equals(user.getEmail()))
                carRepository.deleteById(c.getId());
        }
        userRepository.deleteById(user.getId());
        return true;
    }

    private void sendEmail(String message, String userEmail) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(userEmail);
        mail.setFrom("vrbica.vlado11@gmail.com");
        mail.setText(message);
        mailSender.send(mail);
    }
}
