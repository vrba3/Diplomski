package com.example.userApp.service;

import com.example.userApp.model.User;

import java.util.List;

public interface IUserService {
    User loginUser(User user);
    User getLoggedUser(String email);
    Boolean saveUser(User user);
    List<User> getAllUsers();
    Boolean editUser(User user);
    Boolean deleteUser(User user);
}
