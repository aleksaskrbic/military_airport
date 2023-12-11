package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class State
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String state_mark;
    @Column
    private String state_name;

    //Veza sa aerodromima
    @OneToMany (cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<Airport> airports;

    public State() {}

    public State(Long id, String state_mark, String state_name)
    {
        this.id = id;
        this.state_mark = state_mark;
        this.state_name = state_name;
    }

    public State(Long id, String state_mark, String state_name, List<Airport> airports)
    {
        this.id = id;
        this.state_mark = state_mark;
        this.state_name = state_name;
        this.airports = airports;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getState_mark() {
        return state_mark;
    }

    public void setState_mark(String state_mark) {
        this.state_mark = state_mark;
    }

    public String getState_name() {
        return state_name;
    }

    public void setState_name(String state_name) {
        this.state_name = state_name;
    }

    public List<Airport> getAirports() {
        return airports;
    }

    public void setAirports(List<Airport> airports) {
        this.airports = airports;
    }
}
