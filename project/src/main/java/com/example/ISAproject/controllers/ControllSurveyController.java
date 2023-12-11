package com.example.ISAproject.controllers;

import com.example.ISAproject.model.ControllSurvey;
import com.example.ISAproject.model.Mechanic;
import com.example.ISAproject.model.PilotSurvey;
import com.example.ISAproject.service.ControllSurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ControllSurveyController
{

    @Autowired
    private ControllSurveyService controllSurveyService;

    @RequestMapping(value = "api/control_surveys", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<ControllSurvey>> findAll()
    {
        List<ControllSurvey> surveys = this.controllSurveyService.getAll();
        return new ResponseEntity<>(surveys, HttpStatus.OK);
    }

    @RequestMapping(value="api/control_survey/save",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ControllSurvey> registration(@RequestBody ControllSurvey cs)
    {
        ControllSurvey controllSurvey = this.controllSurveyService.save(cs);
        return new ResponseEntity<>(controllSurvey, HttpStatus.CREATED);
    }

    @RequestMapping(value="api/control_survey/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<ControllSurvey> getById(@PathVariable Long id)
    {

        ControllSurvey controllSurvey =this.controllSurveyService.findById(id);

        return new ResponseEntity<>(controllSurvey,HttpStatus.OK);
    }

    @RequestMapping(value="api/control_survey/update",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ControllSurvey> update(@RequestBody ControllSurvey cs)
    {
        ControllSurvey controllSurvey = this.controllSurveyService.Update(cs);
        return new ResponseEntity<>(controllSurvey, HttpStatus.CREATED);
    }
}
