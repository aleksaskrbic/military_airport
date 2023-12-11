package com.example.ISAproject.controllers;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.FlyControler;
import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.service.AirplaneService;
import com.example.ISAproject.service.FlyControlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class FlyControlerController
{
    @Autowired
    private FlyControlerService flyControlerService;

    @RequestMapping(value = "api/controllers", method = RequestMethod.GET, produces =
            { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })

    public ResponseEntity<List<FlyControler>> findAll()
    {
        List<FlyControler> controllers = this.flyControlerService.getAll_Controllers();
        return new ResponseEntity<>(controllers, HttpStatus.OK);
    }

    @RequestMapping(value="api/controller/{id}",method = RequestMethod.GET,produces= {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<FlyControler> getById(@PathVariable Long id)
    {

        FlyControler flyControler =this.flyControlerService.findById(id);

        return new ResponseEntity<>(flyControler,HttpStatus.OK);
    }

    //Dodavanje penala ukoliko se korisnik ne pojavi na pregledu
    @RequestMapping(value="api/addPenal",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FlyTerm> addPenal(@RequestBody FlyTerm dt)
    {
        FlyTerm flyTerm = this.flyControlerService.addPenalty(dt);
        return new ResponseEntity<>(flyTerm, HttpStatus.CREATED);
    }

    //Provera Da Li se Korisnik pojavio na pregledu
    @PutMapping("api/term/edit")
    public ResponseEntity<FlyTerm> UpdateExam(@RequestBody FlyTerm dt)
    {
        FlyTerm flyTerm = this.flyControlerService.UpdateFly(dt);
        return  new ResponseEntity<>(flyTerm, HttpStatus.OK);
    }


}
