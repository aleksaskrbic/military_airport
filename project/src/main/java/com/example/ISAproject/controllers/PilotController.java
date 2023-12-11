package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.model.User;
import com.example.ISAproject.service.AirplaneService;
import com.example.ISAproject.service.PilotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PilotController
{
    @Autowired
    private PilotService pilotService;


    @RequestMapping(value = "api/pilots", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Pilot>> findAll()
    {
        List<Pilot> pilots = this.pilotService.getAll_Pilot();
        return new ResponseEntity<>(pilots, HttpStatus.OK);
    }

    @RequestMapping(value="api/pilot/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Pilot> getById(@PathVariable Long id)
    {

        Pilot pilot =this.pilotService.findById(id);
        return new ResponseEntity<>(pilot,HttpStatus.OK);
    }

    //Izmena podataka za pilota
    @PutMapping("api/pilot/edit")
    public ResponseEntity<Pilot> UpdatePilot(@RequestBody Pilot p)
    {
        Pilot pilot = this.pilotService.UpdatePilot(p);
        return  new ResponseEntity<>(pilot, HttpStatus.OK);
    }

    //Registracija Pilota
    @RequestMapping(value="api/registration/pilot",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Pilot> registration(@RequestBody Pilot p)
    {
        Pilot pilot = this.pilotService.RegisterPilot(p);
        return new ResponseEntity<>(pilot, HttpStatus.CREATED);
    }

    //Prikaz Pilota koji rade na Aerodromu
    @RequestMapping(value="api/airport_pilots/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Pilot>> getPilotsByAirport(@PathVariable Long id)
    {
        List<Pilot> pilots = this.pilotService.getPilotsByAirport(id);
        return new ResponseEntity<>(pilots,HttpStatus.OK);
    }


}
