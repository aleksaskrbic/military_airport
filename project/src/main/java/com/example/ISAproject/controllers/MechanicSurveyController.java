package com.example.ISAproject.controllers;

import com.example.ISAproject.model.MechanicSurvey;
import com.example.ISAproject.model.PilotSurvey;
import com.example.ISAproject.service.MechanicSurveyService;
import com.example.ISAproject.service.PilotSurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MechanicSurveyController
{

    @Autowired
    private MechanicSurveyService mechanicSurveyService;

    @RequestMapping(value = "api/mechanic_surveys", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<MechanicSurvey>> findAll()
    {
        List<MechanicSurvey> pilot_surveys = this.mechanicSurveyService.findAll();
        return new ResponseEntity<>(pilot_surveys, HttpStatus.OK);
    }

    @RequestMapping(value="api/mechanic_survey/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<MechanicSurvey> getById(@PathVariable Long id)
    {

        MechanicSurvey mechanicSurvey = this.mechanicSurveyService.findById(id);
        return new ResponseEntity<>(mechanicSurvey,HttpStatus.OK);
    }

    @RequestMapping(value="api/mechanic_survey/save",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<MechanicSurvey> registration(@RequestBody MechanicSurvey ps)
    {
        MechanicSurvey pilotSurvey = this.mechanicSurveyService.save(ps);
        return new ResponseEntity<>(pilotSurvey, HttpStatus.CREATED);
    }
}
