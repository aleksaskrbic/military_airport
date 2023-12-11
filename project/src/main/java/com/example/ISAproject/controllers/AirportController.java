package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.Airport;
import com.example.ISAproject.service.AirplaneService;
import com.example.ISAproject.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AirportController
{
    @Autowired
    private AirportService airportService;

    @RequestMapping(value = "api/airports", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Airport>> findAll()
    {
        List<Airport> airports = this.airportService.getAll_Airports();
        return new ResponseEntity<>(airports, HttpStatus.OK);
    }

    @RequestMapping(value="api/airport/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Airport> getById(@PathVariable Long id)
    {

        Airport airport =this.airportService.findById(id);

        return new ResponseEntity<>(airport,HttpStatus.OK);
    }

}
