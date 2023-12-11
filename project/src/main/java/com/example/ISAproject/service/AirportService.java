package com.example.ISAproject.service;

import com.example.ISAproject.model.Airport;
import com.example.ISAproject.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AirportService
{
    @Autowired
    private AirportRepository airportRepository;

    public List<Airport> getAll_Airports() { return  this.airportRepository.findAll();}

    public Airport findById(Long id)
    {
        Optional<Airport> opt=this.airportRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }
}
