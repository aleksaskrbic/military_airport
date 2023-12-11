package com.example.ISAproject.service;

import com.example.ISAproject.model.Airport;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.model.PilotSurvey;
import com.example.ISAproject.model.User;
import com.example.ISAproject.repository.AirportRepository;
import com.example.ISAproject.repository.PilotRepository;
import com.example.ISAproject.repository.PilotSurveyRepository;
import com.example.ISAproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PilotService
{
    @Autowired
    private PilotRepository pilotRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AirportRepository airportRepository;
    @Autowired
    private PilotSurveyRepository pilotSurveyRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Pilot> getAll_Pilot()
    {
        List <Pilot> all_pilots = this.pilotRepository.findAll();
        List <Pilot> finded_pilots = new ArrayList<>();
        for(Pilot pilot: all_pilots)
        {
            if(pilot.getId() != 133)
            {
                finded_pilots.add(pilot);
               // System.out.println("Nasao sam ti pilote!");

            }
        }

        return  finded_pilots;
    }

    public Pilot findById(Long id)
    {
        Optional<Pilot> opt=this.pilotRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

    public Pilot UpdatePilot(Pilot p)
    {
        Pilot pilot = pilotRepository.getById(p.getId());

        pilot.setUsername(p.getUsername());
        pilot.setPassword(p.getPassword());
        pilot.setEmail(p.getEmail());
        pilot.setMobile(p.getMobile());
        pilot.setMobile(p.getMobile());
        pilot.setAdress(p.getAdress());
        pilot.setCity(p.getCity());
        pilot.setFirstName(p.getFirstName());
        return  this.pilotRepository.save(pilot);
    }


    //Додавање новог пилота
    public Pilot RegisterPilot(Pilot pilot)
    {
        List<Pilot> all_pilots = pilotRepository.findAll();
        List<User>  all_users  = userRepository.findAll();

        for(Pilot p: all_pilots)
        {
            if(pilotRepository.findPilotByUsername(pilot.getUsername()) != null)
            {
                System.out.println("Већ постоји пилот са тим корисничким именом!");
                return null;
            }
            else if(pilot.getUsername().isEmpty() || pilot.getPassword().isEmpty() || pilot.getEmail().isEmpty()
                    || pilot.getFirstName().isEmpty() || pilot.getLastName().isEmpty())
            {
                System.out.println("Недостају неки кључни подаци! Проверите унос поново!");
                return null;
            }
        }

         long Id = 0;
         for(User u: all_users)
         {
             Id = u.getId();
         }
         Id = Id + 1;
         pilot.setId(Id);
        pilot.setPassword(passwordEncoder.encode(pilot.getPassword()));


        System.out.println("Kreirao si me");

        return this.pilotRepository.save(pilot);
    }

    //Prikaz Pilota koji rade na tom aerodromu
    public List<Pilot> getPilotsByAirport(Long id)
    {
       List<Pilot> all_pilots = pilotRepository.findAll();
       List<Pilot> searched_pilots = new ArrayList<>();

       for(Pilot p: all_pilots)
       {
           if(p.getAirport().getId() == id)
           {
               searched_pilots.add(p);
           }
       }

       return searched_pilots;
    }


}
