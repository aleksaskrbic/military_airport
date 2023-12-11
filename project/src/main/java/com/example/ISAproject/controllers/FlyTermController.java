package com.example.ISAproject.controllers;

import com.example.ISAproject.dto.DefinedTermDTO;
import com.example.ISAproject.dto.ScheduledTermDTO;
import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.service.FlyTermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PessimisticLockException;
import java.awt.*;
import java.time.DateTimeException;
import java.util.List;

@RestController
@CrossOrigin("*")
public class FlyTermController {
    @Autowired
    private FlyTermService flyTermService;

    @RequestMapping(value = "api/terms", method = RequestMethod.GET, produces =
            {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<java.util.List<FlyTerm>> findAll() {
        List<FlyTerm> terms = this.flyTermService.getAll_Term();
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }

    @RequestMapping(value = "api/term/{id}", method = RequestMethod.GET, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<FlyTerm> getById(@PathVariable Long id) {

        FlyTerm term = this.flyTermService.findById(id);

        return new ResponseEntity<>(term, HttpStatus.OK);
    }


    @RequestMapping(value = "api/pilot_terms/{id}", method = RequestMethod.GET, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<FlyTerm>> getTermsByPilotId(@PathVariable Long id) {
        List<FlyTerm> terms = this.flyTermService.getTermsForPilot(id);
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }
    //Prikaz Buducih Termina
    @RequestMapping(value = "api/future_terms/{id}", method = RequestMethod.GET, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<FlyTerm>> getFutureTermsByPilotId(@PathVariable Long id) {
        List<FlyTerm> terms = this.flyTermService.getFutureTermsForPilot(id);
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }

    //Sortiranje  Termina po datumu
    @RequestMapping(value = "api/terms/sort-by-date", method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<List<FlyTerm>> sortTermsByDate() {
        //List<FlyTerm> flyTerms=this.flyTermService.sortByDate(id);
        List<FlyTerm> flyTerms = this.flyTermService.sortByDate();
        return new ResponseEntity<>(flyTerms, HttpStatus.OK);
    }

    //Sortiranje  Termina po duzini trajanja
    @RequestMapping(value = "api/terms/sort-by-duration", method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<List<FlyTerm>> sortByDuration() {
        //List<FlyTerm> flyTerms=this.flyTermService.sortByDuration(id);
        List<FlyTerm> flyTerms = this.flyTermService.sortByDuration();
        return new ResponseEntity<>(flyTerms, HttpStatus.OK);
    }

    //Sortiranje  Termina po dolasku pilota na let
    @RequestMapping(value = "api/terms/sort-by-coming", method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<List<FlyTerm>> sortByIsPilotCome() {
        //List<FlyTerm> flyTerms=this.flyTermService.sortByDuration(id);
        List<FlyTerm> flyTerms = this.flyTermService.sortByDuration();
        return new ResponseEntity<>(flyTerms, HttpStatus.OK);
    }


    //Kreiranje Brzih rezervacija
    @RequestMapping(value = "api/terms/addFastTerm", method = RequestMethod.PUT, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<DefinedTermDTO> addFastReservation(@RequestBody DefinedTermDTO dto) {
        DefinedTermDTO definedTermDTO = new DefinedTermDTO();
        FlyTerm flyTerm = new FlyTerm();
        try {
            definedTermDTO = this.flyTermService.createFastReservation(dto);
        } catch (PessimisticLockException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } catch (DateTimeException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(definedTermDTO, HttpStatus.OK);
    }

   //Prikaz Termina koji su KOMPLETNI
   @RequestMapping(value = "api/terms/completed", method = RequestMethod.GET,
           produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

   public ResponseEntity<List<FlyTerm>> viewCompletedTerms() {
       List<FlyTerm> flyTerms = this.flyTermService.viewCompletedTerms();
       return new ResponseEntity<>(flyTerms, HttpStatus.OK);
   }

    @RequestMapping(value = "api/terms/reservation", method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<List<FlyTerm>> viewCompletedAndFreeTerms() {
        List<FlyTerm> flyTerms = this.flyTermService.viewCompletedAndFreeTerms();
        return new ResponseEntity<>(flyTerms, HttpStatus.OK);
    }

    @RequestMapping(value = "api/terms/schedule_term", method = RequestMethod.PUT, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<FlyTerm> scheduleTerm(@RequestBody ScheduledTermDTO dto) {

        FlyTerm flyTerm = new FlyTerm();
        flyTerm = this.flyTermService.scheduleFlyTerm(dto);
        return new ResponseEntity<>(flyTerm, HttpStatus.OK);
    }

    @RequestMapping(value = "api/terms/mechanic_term", method = RequestMethod.PUT, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<FlyTerm> giveMechanicTerm(@RequestBody ScheduledTermDTO dto) {

        FlyTerm flyTerm = new FlyTerm();
        flyTerm = this.flyTermService.giveMechanicTerm(dto);
        return new ResponseEntity<>(flyTerm, HttpStatus.OK);
    }

    @RequestMapping(value = "api/terms/cancel_term", method = RequestMethod.PUT, produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<FlyTerm> cancelTerm(@RequestBody ScheduledTermDTO dto) {

        FlyTerm flyTerm = new FlyTerm();
        flyTerm = this.flyTermService.cancelFlyTerm(dto);
        return new ResponseEntity<>(flyTerm, HttpStatus.OK);
    }
}