package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.Mechanic;
import com.example.ISAproject.service.AirplaneService;
import com.example.ISAproject.service.MechanicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MechanicController
{
   @Autowired
   private MechanicService mechanicService;

   @RequestMapping(value = "api/mechanics", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Mechanic>> findAll()
    {
        List<Mechanic> mechanics = this.mechanicService.getAll_Mechanic();
        return new ResponseEntity<>(mechanics, HttpStatus.OK);
    }

    @RequestMapping(value="api/mechanic/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Mechanic> getById(@PathVariable Long id)
    {

        Mechanic mechanic =this.mechanicService.findById(id);

        return new ResponseEntity<>(mechanic,HttpStatus.OK);
    }
}
