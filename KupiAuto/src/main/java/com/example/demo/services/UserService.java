package com.example.demo.services;

import com.example.demo.model.User;

import java.util.List;

public interface UserService {
    public User loginUser(User user);
    public User getLoggedUser(String email);
    public Boolean saveUser(User user);
    public List<User> getAllUsers();
    public Boolean editUser(User user);
}
