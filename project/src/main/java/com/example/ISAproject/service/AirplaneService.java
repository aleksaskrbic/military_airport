package com.example.ISAproject.service;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.Airport;
import com.example.ISAproject.model.Mechanic;
import com.example.ISAproject.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AirplaneService
{
    @Autowired
    private AirplaneRepository airplaneRepository;
    @Autowired
    private MechanicService mechanicService;

    public List<Airplane> getAll_Airplanes() {return  this.airplaneRepository.findAll();}

    public Airplane findById(Long id)
    {
        Optional<Airplane> opt=this.airplaneRepository.findById(id);
        if(!opt.isPresent())
        {
            System.out.println("NISAM TI IZVUKAO AVION!");
            return null;
        }
        System.out.println("IZVUKAO SAM TI AVION!");
        return opt.get();
    }

    //Sortiranje po tipu Aviona
    public List<Airplane> sortByAirplane_Type()
    {
        List<Airplane> sorted_airplanes = airplaneRepository.findByOrderByAirplaneType();
        return sorted_airplanes;
    }

    //Sortiranje po Registarskoj Oznaci
    public List<Airplane> sortByReg_Mark()
    {
        List<Airplane> sorted_airplanes = airplaneRepository.findByOrderByRegistrationMark();
        return sorted_airplanes;
    }

    //Sortiranje po Tipu Naoruzanja
    public List<Airplane> sortByWep_Sys()
    {
        List<Airplane> sorted_airplanes = airplaneRepository.findByOrderByWeaponSystem();
        return sorted_airplanes;
    }

    //Pretraga Aviona po tipu
    public  List<Airplane> findAirplaneByType(String airplane_type)
    {
        return this.airplaneRepository.findByAirplaneType(airplane_type);
    }

    //Registracija novog aviona
    public Airplane RegisterPlane(Airplane airplane)
    {
        List<Airplane> all_airplanes = airplaneRepository.findAll();
        Long mechanic_id = Long.valueOf(14);
        Mechanic mechanic = mechanicService.findById(mechanic_id);

        for(Airplane a: all_airplanes)
        {
            if(airplaneRepository.findAirplaneByRegistrationMark(airplane.getRegistrationMark()) != null)
            {
                System.out.println("Vec postoji avion sa tom registarskom oznakom!");
                return null;
            }
            else if(airplane.getRegistrationMark().isEmpty() || airplane.getAirplane_name().isEmpty() || airplane.getAirplaneType().isEmpty())
            {
                System.out.println("Nedostaju osnovni podaci! Proverite unos!");
                return null;
            }
        }

        long Id = 0;
        for(Airplane ap: all_airplanes)
        {
            Id = ap.getId();
        }

        Id = Id + 1;

        airplane.setId(Id);
        airplane.setMechanic(mechanic);
        return this.airplaneRepository.save(airplane);
    }
}
