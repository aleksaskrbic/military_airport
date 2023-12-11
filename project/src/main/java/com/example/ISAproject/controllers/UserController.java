package com.example.ISAproject.controllers;

import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.model.User;
import com.example.ISAproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController
{
    @Autowired
    private UserService userService;

    @RequestMapping(value = "api/user/{id}", method = RequestMethod.GET, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<User> getById(@PathVariable Long id) {

        User user = this.userService.findById(id);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}