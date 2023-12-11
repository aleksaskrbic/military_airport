package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.State;
import com.example.ISAproject.service.AirplaneService;
import com.example.ISAproject.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class StateController
{

    @Autowired
    private StateService stateService;

    @RequestMapping(value = "api/states", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<State>> findAll()
    {
        List<State> states = this.stateService.getAllState();
        return new ResponseEntity<>(states, HttpStatus.OK);
    }

    @RequestMapping(value="api/state/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<State> getById(@PathVariable Long id)
    {

        State state =this.stateService.findById(id);

        return new ResponseEntity<>(state,HttpStatus.OK);
    }

}
