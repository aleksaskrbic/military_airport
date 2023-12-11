package com.example.ISAproject.service;


import com.example.ISAproject.model.FlyTerm;
import com.example.ISAproject.model.RailWay;
import com.example.ISAproject.repository.RailwayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RailWayService
{

    @Autowired
    RailwayRepository railwayRepository;

    public List<RailWay> getAll_RailWays() {return  this.railwayRepository.findAll();}

    public RailWay findById(Long id)
    {
        Optional<RailWay> opt = this.railwayRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }


}
