package com.example.ISAproject.service;

import com.example.ISAproject.model.State;
import com.example.ISAproject.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StateService
{
    @Autowired
    private StateRepository stateRepository;

    public List<State> getAllState() {return this.stateRepository.findAll();}

    public State findById(Long id)
    {
        Optional<State> opt=this.stateRepository.findById(id);
        if(!opt.isPresent())
        {
            return null;
        }
        return opt.get();
    }

}
