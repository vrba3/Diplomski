package com.example.demo.services;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        Iterable<User> allUsers = userRepository.findAll();
        ArrayList<User> allUsersList = new ArrayList<User>();
        allUsers.forEach(allUsersList::add);

        return allUsersList;
    }

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

    public Boolean saveUser(User user) {
        User checkUser = userRepository.findByEmail(user.getEmail());

        if(checkUser != null)
            return false;

        userRepository.save(user);
        return true;
    }
}
