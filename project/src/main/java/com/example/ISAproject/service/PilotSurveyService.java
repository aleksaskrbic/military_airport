package com.example.ISAproject.service;

import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.model.MechanicSurvey;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.model.PilotSurvey;
import com.example.ISAproject.repository.FlyTermRepository;
import com.example.ISAproject.repository.PilotRepository;
import com.example.ISAproject.repository.PilotSurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PilotSurveyService
{
    @Autowired
    private PilotSurveyRepository pilotSurveyRepository;
    @Autowired
    private FlyTermRepository flyTermRepository;
    @Autowired
    private FlyTermService flyTermService;
    @Autowired
    private PilotRepository pilotRepository;
    @Autowired
    private PilotService pilotService;


    public List<PilotSurvey> findAll() {return  this.pilotSurveyRepository.findAll();}

    public PilotSurvey findById(Long id)
    {
        Optional<PilotSurvey> opt=this.pilotSurveyRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

    public PilotSurvey save(PilotSurvey pilotSurvey)
    {

        if(pilotSurvey.getP1().equals("NO"))
        {
            pilotSurvey.setPilot_Approved(false);

        }
        else if(pilotSurvey.getP2().equals("NO"))
        {
            pilotSurvey.setPilot_Approved(false);
        }
        else if(pilotSurvey.getP3().equals("NO"))
        {
            pilotSurvey.setPilot_Approved(false);
        }
        else if(pilotSurvey.getP4().equals("NO"))
        {
            pilotSurvey.setPilot_Approved(false);
        }

        else if(pilotSurvey.getP1().equals("YES") && pilotSurvey.getP2().equals("YES") && pilotSurvey.getP3().equals("YES")
        && pilotSurvey.getP4().equals("YES") && pilotSurvey.getP5().equals("YES") && pilotSurvey.getP6().equals("YES"))
        {
            pilotSurvey.setPilot_Approved(true);
        }
        return this.pilotSurveyRepository.save(pilotSurvey);
    }

    public PilotSurvey findSurveyByPilot(Long id)
    {
        return this.pilotSurveyRepository.findPilotSurveyByPilotId(id);
    }

}
