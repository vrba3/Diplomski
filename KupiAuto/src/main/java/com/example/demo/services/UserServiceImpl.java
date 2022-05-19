package com.example.demo.services;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    public User loginUser(User user) {
        User foundUser = userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());

        if (foundUser != null){
            return foundUser;
        }
        else{
            return null;
        }
    }

    public User getLoggedUser(String email) {
        User foundUser = userRepository.findByEmail(email);

        return foundUser;
    }
}
