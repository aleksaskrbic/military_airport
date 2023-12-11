package com.example.ISAproject.service;

import com.example.ISAproject.model.FlyControler;
import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.model.Mechanic;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.repository.FlyControlerRepository;
import com.example.ISAproject.repository.FlyTermRepository;
import com.example.ISAproject.repository.PilotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlyControlerService
{
    @Autowired
    private FlyControlerRepository flyControlerRepository;
    @Autowired
    private FlyTermService flyTermService;
    @Autowired
    private PilotRepository pilotRepository;
    @Autowired
    private FlyTermRepository flyTermRepository;

    public List<FlyControler> getAll_Controllers() {return  this.flyControlerRepository.findAll();}

    public FlyControler findById(Long id)
    {
        Optional<FlyControler> opt=this.flyControlerRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

    //Dodeljivanje Penala
    //Sa povratnom vrednoscu
    public FlyTerm addPenalty(FlyTerm dt)
    {
        FlyTerm flyTerm = flyTermService.findById(dt.getId());
        Pilot pilot = flyTerm.getPilot();

        if(flyTerm.isPilotCome() == false && flyTerm.isPilotGotPenalty() == false)
        {
            flyTerm.setPilotGotPenalty(true);
            pilot.setPoints(pilot.getPoints() + 1);
            System.out.println("Stavio sam penal NA TRUE");
        }
        else
        {
            System.out.println("NISAM STAVIO PENAL");

        }
        pilotRepository.save(pilot);
        return flyTerm;
    }

    //Provera Da li se Pilot Pojavio ili nije na Letu
    public FlyTerm UpdateFly(FlyTerm dt)
    {
        FlyTerm flyTerm = flyTermService.findById(dt.getId());
        Pilot pilot = flyTerm.getPilot();

        if (flyTerm.isPilotCome() == true)
        {
            flyTerm.setPilotCome(false);
            flyTerm.setFreeTerm(true);
        }
        else if(flyTerm.isPilotCome() == false)
        {

            if(flyTerm.isPilotGotPenalty() == true)
            {
                pilot.setPoints(pilot.getPoints() - 1);
                flyTerm.setPilotGotPenalty(false);
                flyTerm.setPilotCome(true);
                flyTerm.setFreeTerm(true);
            }
            else
            {
                flyTerm.setPilotCome(true);
                flyTerm.setFreeTerm(true);
            }
        }
        pilotRepository.save(pilot);
        flyTermRepository.save(flyTerm);
        return  flyTerm;
    }

}
