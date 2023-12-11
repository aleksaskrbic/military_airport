package com.example.ISAproject.service;

import com.example.ISAproject.model.ControllSurvey;
import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.model.MechanicSurvey;
import com.example.ISAproject.repository.ControllSurveyRepository;
import com.example.ISAproject.repository.FlyTermRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ControllSurveyService
{
    @Autowired
    private ControllSurveyRepository controllSurveyRepository;
    @Autowired
    private FlyTermService flyTermService;
    @Autowired
    private FlyTermRepository flyTermRepository;

    public List<ControllSurvey> getAll()
    {
       return this.controllSurveyRepository.findAll();
    }

    public ControllSurvey findById(Long id)
    {
        Optional<ControllSurvey> opt=this.controllSurveyRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

    public ControllSurvey save(ControllSurvey controllSurvey)
    {
        FlyTerm flyTerm = this.flyTermService.findById(controllSurvey.getFlyTerm().getId());
        if(controllSurvey == null)
        {
            System.out.println("Nisi mi poslao nista! NIJE SACUVANO!");
        }
        else
        {
            if(controllSurvey.getFlyTerm().getMechanicSurvey().isMechanic_approved() == false ||
                    controllSurvey.getFlyTerm().getPilotSurvey().isPilot_Approved() == false)
            {
                controllSurvey.setMission_type("НЕПОЗНАТО");
                controllSurvey.setMission_success("НЕУСПЕШНО");
                controllSurvey.setMission_goal("kraj");
                flyTerm.setCompletedTerm(true);
                flyTermRepository.save(flyTerm);
               return this.controllSurveyRepository.save(controllSurvey);
            }
            else if(controllSurvey.getFlyTerm().getMechanicSurvey().isMechanic_approved() == true &&
                    controllSurvey.getFlyTerm().getPilotSurvey().isPilot_Approved() == true)
            {
               // controllSurvey.setMission_type("УСПЕШНО");
                controllSurvey.setMission_success("УСПЕШНО");
                controllSurvey.setMission_goal("kraj");
                flyTerm.setCompletedTerm(true);
                flyTermRepository.save(flyTerm);
                return this.controllSurveyRepository.save(controllSurvey);


            }
            System.out.println("SACUVAO SI ME");
            return  this.controllSurveyRepository.save(controllSurvey);

        }


        //return  this.controllSurveyRepository.save(controllSurvey);
          return null;
    }

    //APDEJT UTROSENE OPREME
    public ControllSurvey Update(ControllSurvey cs)
    {
        ControllSurvey controllSurvey = this.findById(cs.getId());
        FlyTerm flyTerm = flyTermService.findById(cs.getFlyTerm().getId());

        //Azuriranje broja raketa i utrosenog goriva
        if(flyTerm.getMechanicSurvey().isMechanic_approved() == true && flyTerm.getPilotSurvey().isPilot_Approved() == true)
        {
            flyTerm.getAirplane().setFuel_reserve(flyTerm.getAirplane().getFuel_reserve() - cs.getFuel_used());
            flyTerm.getAirplane().getWeaponSystem().setNumber_of_rockets(flyTerm.getAirplane().getWeaponSystem().getNumber_of_rockets() - cs.getNumber_of_rockets());
            System.out.println("AZURIRAO SAM TI RAKETE I GORIVO!");
            System.out.println("UNEO SAM RAKETA:" + " " + controllSurvey.getNumber_of_rockets() + " OSTALO JE:" + " "
            + flyTerm.getAirplane().getWeaponSystem().getNumber_of_rockets());
            System.out.println(controllSurvey.getNumber_of_rockets());
           // return this.controllSurveyRepository.save(controllSurvey);
        }
        flyTermRepository.save(flyTerm);
        return this.controllSurveyRepository.save(controllSurvey);
    }
}
