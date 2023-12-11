package com.example.ISAproject.service;

import com.example.ISAproject.dto.DefinedTermDTO;
import com.example.ISAproject.dto.ScheduledTermDTO;
import com.example.ISAproject.dto.TimePeriodDTO;
import com.example.ISAproject.model.*;
import com.example.ISAproject.repository.FlyTermRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.stereotype.Service;

import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FlyTermService
{
    @Autowired
    private FlyTermRepository flyTermRepository;
    @Autowired
    private AirplaneService airplaneService;
    @Autowired
    private PilotService pilotService;
    @Autowired
    private RailWayService railWayService;
    @Autowired
    private PilotSurveyService pilotSurveyService;
    @Autowired
    private MechanicService mechanicService;
    @Autowired
    private MechanicSurveyService mechanicSurveyService;

    public List<FlyTerm> getAll_Term() {return  this.flyTermRepository.findAll();}

    public FlyTerm findById(Long id)
    {
        Optional<FlyTerm> opt=this.flyTermRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

    //Prikaz Termina Za Letenje Vezanog za Pilota
    public List<FlyTerm> getTermsForPilot(Long id) {
        List<FlyTerm> all_terms = this.flyTermRepository.findAll();
        List<FlyTerm> history_terms = new ArrayList<>();

        for (FlyTerm flyTerm : all_terms)
        {
            if (flyTerm.getPilot().getId() == id) {
               if(flyTerm.isCompletedTerm() == false)
               {
                   history_terms.add(flyTerm);

               }

            }
        }
        return history_terms;
    }

    //Prikaz Buducih Termina
    public List<FlyTerm> getFutureTermsForPilot(Long id)
    {
        List<FlyTerm> all_terms = this.flyTermRepository.findAll();
        List<FlyTerm> history_terms = new ArrayList<>();

        for(FlyTerm flyTerm: all_terms)
        {
            if(flyTerm.getPilot().getId() == id)
            {
                if(flyTerm.isCompletedTerm() == false)
                    history_terms.add(flyTerm);
            }
        }
        return history_terms;
    }

    //Sortiranje Termina po Datumu
    public List<FlyTerm> sortByDate()
    {
        List<FlyTerm> flyTerms = this.flyTermRepository.findByOrderByStart();
        /*List<FlyTerm> terms = new ArrayList<>();

        for(FlyTerm flyTerm: flyTerms)
        {
            if(flyTerm.getPilot().getId().equals(id))
            {
                terms.add(flyTerm);
            }
        }*/

        //return terms;
        return  flyTerms;
    }

    //Sortiranje po trajanju
    public List<FlyTerm> sortByDuration()
    {
        List<FlyTerm> flyTerms = this.flyTermRepository.findByOrderByDuration();
       /* List<FlyTerm> terms = new ArrayList<>();

        for(FlyTerm flyTerm: flyTerms)
        {
            if(flyTerm.getPilot().getId().equals(id))
            {
                terms.add(flyTerm);
            }
        }

        return terms;*/
        return flyTerms;
    }



    //Sortiranje po Tome da li je Pilot dosao na let
    public List<FlyTerm> sortByIsPilotCome()
    {
        List<FlyTerm> flyTerms = this.flyTermRepository.findByOrderByIsPilotCome();
      /*  List<FlyTerm> terms = new ArrayList<>();

        for(FlyTerm flyTerm: flyTerms)
        {
            if(flyTerm.getPilot().getId().equals(id))
            {
                terms.add(flyTerm);
            }
        }

        return terms;*/
        return flyTerms;
    }

    //Prikaz Termina koji su IZVRSENI
    public List<FlyTerm> viewCompletedTerms() {
        List<FlyTerm> all_terms = flyTermRepository.findAll();
        List<FlyTerm> searched_terms = new ArrayList<>();

        for (FlyTerm flyTerm : all_terms) {
            if (flyTerm.isCompletedTerm() == true) {
                searched_terms.add(flyTerm);
            }
        }

        return searched_terms;
    }

    //Prikaz Termina koji nisu IZVRSENI i koji su SLOBODNI
    public List<FlyTerm> viewCompletedAndFreeTerms() {
        List<FlyTerm> all_terms = flyTermRepository.findAll();
        List<FlyTerm> searched_terms = new ArrayList<>();

        for (FlyTerm flyTerm : all_terms) {
            if (flyTerm.isCompletedTerm() == false && flyTerm.isFreeTerm() == true) {
                searched_terms.add(flyTerm);
            }
        }

        return searched_terms;
    }

    //Kreiranje novog termina
    public DefinedTermDTO createFastReservation(DefinedTermDTO dto) throws PessimisticLockingFailureException, DateTimeException
    {
        Airplane airplane = airplaneService.findById(dto.getAirplane().getId());
        Pilot pilot = pilotService.findById(dto.getPilot().getId());
        RailWay railWay = railWayService.findById(dto.getRailWay().getId());

        LocalDateTime present_time = LocalDateTime.now();
        boolean is_past_term = false;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        LocalDateTime start = LocalDateTime.parse(dto.getStart(),formatter);
        LocalDateTime end = LocalDateTime.parse(dto.getEnd(),formatter);

        TimePeriodDTO time=new TimePeriodDTO();
        time.setStart(dto.getStart());
        time.setEnd(dto.getEnd());

        FlyTerm newTerm = new FlyTerm(dto.getId(), start, end, dto.getDuration(), false, true,
                                       pilot, dto.getAirplane(), dto.getRailWay());

        if(newTerm.getStart().isAfter(present_time.minusDays(1)) &&
                newTerm.getStart().isAfter(present_time.minusDays(1)) &&
                newTerm.getEnd().isAfter(present_time.minusDays(1)))
        {
            is_past_term = false;
            flyTermRepository.save(newTerm);
            System.out.println("Zoves Kako treba");
        }

        DefinedTermDTO newDTO = new DefinedTermDTO(newTerm.getId(), newTerm.getStart().format(formatter), newTerm.getEnd().format(formatter),
                newTerm.getDuration(), pilot, airplane, railWay);

        return newDTO;
    }

    //Zakazivanje Termina Za Pilota
    public FlyTerm scheduleFlyTerm(ScheduledTermDTO dto)
    {
        Pilot pilot = this.pilotService.findById(dto.getPilotId());
        FlyTerm flyTerm = this.findById(dto.getFlyTermId());
        PilotSurvey pilotSurvey = this.pilotSurveyService.findById(dto.getPilotSurveyId());

        if(pilot.getPoints() >= 3 || flyTerm.isFreeTerm() == false)
        {
            System.out.println("Nista nisi zakazao1");
            return null;
        }
        //else if(flyTerm.isFreeTerm() == true && flyTerm.getPilot() == null)
        else if(flyTerm.isFreeTerm() == true && flyTerm.getPilot().getId() == 133)
        {
            flyTerm.setFreeTerm(false);
            flyTerm.setPilotCome(true);
            flyTerm.setPilot(pilot);
            flyTerm.setPilotSurvey(pilotSurvey);

            System.out.println("Uspesno si Zakazao Termin!");
            return this.flyTermRepository.save(flyTerm);
        }

        System.out.println("Nista nisi zakazao2");
        return null;
    }

    //Dodeljivanje Mehanicareve ankete u Termin
    public FlyTerm giveMechanicTerm(ScheduledTermDTO dto)
    {
        FlyTerm flyTerm = this.findById(dto.getFlyTermId());
        MechanicSurvey mechanicSurvey = this.mechanicSurveyService.findById(dto.getMechanicSurveyId());

        if(mechanicSurvey.getP1().equals("NO") || mechanicSurvey.getP2().equals("NO") || mechanicSurvey.getP3().equals("NO") ||
                mechanicSurvey.getP4().equals("NO") || mechanicSurvey.getP5().equals("NO"))

        {
            flyTerm.getAirplane().setEnabled(false);
        }

        if(flyTerm.getMechanicSurvey() == null)
        {
            flyTerm.setMechanicSurvey(mechanicSurvey);
            System.out.println("Uspesno si MEHANICARU DODAO  Termin!");
            return this.flyTermRepository.save(flyTerm);
        }
        System.out.println("MEHANICAR NIJE DOBIO NISTA");
          return  null;
    }



    //Otkazivanje Termina
    public FlyTerm cancelFlyTerm(ScheduledTermDTO dto)
    {
        Pilot pilot = this.pilotService.findById(dto.getPilotId());
        Pilot kvazi_pilot = this.pilotService.findById(133L);
        FlyTerm flyTerm = this.findById(dto.getFlyTermId());


        if( flyTerm.isFreeTerm() == true)
        {
            System.out.println("Nista nisi otkazao1");
            return null;
        }
        else if(flyTerm.isFreeTerm() == false && flyTerm.getPilot() != null)
        {
            flyTerm.setFreeTerm(true);
            flyTerm.setPilotCome(false);
            flyTerm.setPilot(kvazi_pilot);

            System.out.println("Uspesno si OTkazao Termin!");
            return this.flyTermRepository.save(flyTerm);
        }

        System.out.println("Nista nisi otkazao2");
        return null;
    }



}



