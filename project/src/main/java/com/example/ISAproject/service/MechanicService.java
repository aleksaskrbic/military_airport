package com.example.ISAproject.service;

import com.example.ISAproject.model.Mechanic;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.repository.MechanicRepository;
import com.example.ISAproject.repository.PilotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MechanicService
{
    @Autowired
    private MechanicRepository mechanicRepository;

    public List<Mechanic> getAll_Mechanic() {return  this.mechanicRepository.findAll();}

    public Mechanic findById(Long id)
    {
        Optional<Mechanic> opt=this.mechanicRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }
}
