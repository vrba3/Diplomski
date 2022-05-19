package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("Select u from User u where u.email = ?1 and u.password = ?2")
    public User findByEmailAndPassword(String email,String password);
    @Query("Select u from User u where u.email = ?1")
    public User findByEmail(String email);
}
