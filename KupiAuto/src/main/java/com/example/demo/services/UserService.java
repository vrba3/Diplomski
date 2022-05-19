package com.example.demo.services;

import com.example.demo.model.User;

public interface UserService {
    public User loginUser(User user);
    public User getLoggedUser(String email);
}
