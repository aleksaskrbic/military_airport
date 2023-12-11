package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.service.AirplaneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AirplaneController
{
    @Autowired
    private AirplaneService airplaneService;

    @RequestMapping(value = "api/airplanes", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Airplane>> findAll()
    {
        List<Airplane> airplanes = this.airplaneService.getAll_Airplanes();
        return new ResponseEntity<>(airplanes, HttpStatus.OK);
    }

    @RequestMapping(value="api/airplane/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Airplane> getById(@PathVariable Long id)
    {

        Airplane airplane =this.airplaneService.findById(id);

        return new ResponseEntity<>(airplane,HttpStatus.OK);
    }

    @RequestMapping(value = "api/sort/planes", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Airplane>> sortAllByType()
    {
        List<Airplane> airplanes = this.airplaneService.sortByAirplane_Type();
        return new ResponseEntity<>(airplanes, HttpStatus.OK);
    }

    @RequestMapping(value = "api/sort/planes/mark", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Airplane>> sortAllByMark()
    {
        List<Airplane> airplanes = this.airplaneService.sortByReg_Mark();
        return new ResponseEntity<>(airplanes, HttpStatus.OK);
    }

    @RequestMapping(value = "api/sort/planes/system", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<Airplane>> sortAllBySystem()
    {
        List<Airplane> airplanes = this.airplaneService.sortByWep_Sys();
        return new ResponseEntity<>(airplanes, HttpStatus.OK);
    }



    @RequestMapping(value="api/type", method = RequestMethod.GET,
            params = "airplane_type",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Airplane>> findByType(@RequestParam String airplane_type)
    {
        List<Airplane> airplanes=this.airplaneService.findAirplaneByType(airplane_type);
        return new ResponseEntity<>(airplanes,HttpStatus.OK);
    }

    //Registracija Novog Aviona
    @RequestMapping(value="api/registration/plane",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Airplane> registration(@RequestBody Airplane ap)
    {
        Airplane airplane = this.airplaneService.RegisterPlane(ap);
        return new ResponseEntity<>(airplane, HttpStatus.CREATED);
    }






}
