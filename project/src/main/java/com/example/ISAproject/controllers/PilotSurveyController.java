package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.model.PilotSurvey;
import com.example.ISAproject.service.PilotSurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PilotSurveyController
{
    @Autowired
    private PilotSurveyService pilotSurveyService;

    @RequestMapping(value = "api/pilot_surveys", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<PilotSurvey>> findAll()
    {
        List<PilotSurvey> pilot_surveys = this.pilotSurveyService.findAll();
        return new ResponseEntity<>(pilot_surveys, HttpStatus.OK);
    }

    @RequestMapping(value="api/pilot_survey/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<PilotSurvey> getById(@PathVariable Long id)
    {

        PilotSurvey pilotSurvey = this.pilotSurveyService.findById(id);
        return new ResponseEntity<>(pilotSurvey,HttpStatus.OK);
    }

    @RequestMapping(value="api/pilot_survey/save",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PilotSurvey> registration(@RequestBody PilotSurvey ps)
    {
        PilotSurvey pilotSurvey = this.pilotSurveyService.save(ps);
        return new ResponseEntity<>(pilotSurvey, HttpStatus.CREATED);
    }

    @RequestMapping(value="api/pilot_survey_pilot/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<PilotSurvey> getByPilotId(@PathVariable Long id)
    {

        PilotSurvey pilotSurvey = this.pilotSurveyService.findSurveyByPilot(id);
        return new ResponseEntity<>(pilotSurvey,HttpStatus.OK);
    }
}
