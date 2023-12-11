package com.example.ISAproject.service;

import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.model.MechanicSurvey;
import com.example.ISAproject.model.PilotSurvey;
import com.example.ISAproject.repository.AirplaneRepository;
import com.example.ISAproject.repository.FlyTermRepository;
import com.example.ISAproject.repository.MechaninicSurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MechanicSurveyService
{
    @Autowired
    private MechaninicSurveyRepository mechaninicSurveyRepository;
    @Autowired
    private FlyTermService flyTermService;
    @Autowired
    private FlyTermRepository flyTermRepository;
    @Autowired
    private AirplaneRepository airplaneRepository;


    public List<MechanicSurvey> findAll() {return  this.mechaninicSurveyRepository.findAll();}

    public MechanicSurvey findById(Long id)
    {
        Optional<MechanicSurvey> opt=this.mechaninicSurveyRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

    public MechanicSurvey save(MechanicSurvey mechanicSurvey)
    {
       if(mechanicSurvey.getP1().equals("NO"))
       {
           mechanicSurvey.setMechanic_approved(false);
       }
       else if(mechanicSurvey.getP2().equals("NO"))
       {
           mechanicSurvey.setMechanic_approved(false);
       }
       else if(mechanicSurvey.getP3().equals("NO"))
       {
           mechanicSurvey.setMechanic_approved(false);
       }
       else if(mechanicSurvey.getP4().equals("NO"))
       {
           mechanicSurvey.setMechanic_approved(false);
       }

       else if(mechanicSurvey.getP5().equals("NO"))
       {
           mechanicSurvey.setMechanic_approved(false);
       }
       else if(mechanicSurvey.getP1().equals("YES") && mechanicSurvey.getP2().equals("YES") && mechanicSurvey.getP3().equals("YES")
       && mechanicSurvey.getP4().equals("YES") && mechanicSurvey.getP5().equals("YES"))
       {
           mechanicSurvey.setMechanic_approved(true);
       }

        return this.mechaninicSurveyRepository.save(mechanicSurvey);
    }

}
