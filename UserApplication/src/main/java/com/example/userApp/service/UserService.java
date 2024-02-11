package com.example.userApp.service;

import com.example.userApp.model.User;
import com.example.userApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService{

    @Autowired
    private UserRepository userRepository;
//    @Autowired
//    private CarService carService;
//    @Autowired
//    private CarRepository carRepository;

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
        //sendEmail("Your account has been created!", user.getEmail());
        return true;
    }

    public Boolean editUser(User user) {
        User foundUser = userRepository.findByEmail(user.getEmail());

        if(foundUser != null) {
            foundUser.setFirstName(user.getFirstName());
            foundUser.setLastName(user.getLastName());
            foundUser.setAddress(user.getAddress());
            foundUser.setCity(user.getCity());
            foundUser.setCountry(user.getCountry());
            foundUser.setEmail(user.getEmail());
            foundUser.setMobileNumber(user.getMobileNumber());
            foundUser.setPassword(user.getPassword());
            userRepository.save(foundUser);
            return true;
        } else {
            return false;
        }
    }

    public Boolean deleteUser(User user) {
        //sendEmail("Your account has been deleted!", user.getEmail());
//        List<Car> cars = carService.getAllCars();
//        for(Car c: cars) {
//            if(c.getOwnersEmail().equals(user.getEmail()))
//                carRepository.deleteById(c.getId());
//        }
        userRepository.deleteById(user.getId());
        return true;
    }

    /*private void sendEmail(String message, String userEmail) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(userEmail);
        mail.setFrom("vrbica.vlado11@gmail.com");
        mail.setText(message);
        mailSender.send(mail);
    }*/
}
