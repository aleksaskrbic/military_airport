package com.example.ISAproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Airport
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String airport_mark;
    @Column
    private String airport_name;
    @Column
    private String city;
    @Column
    private String Location;
    @Column
    private int number_of_planes;
    @Column
    private int number_of_stuff;
    @Column
    private int number_of_control_towers;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

    @OneToMany(cascade =  CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Airplane> airplanes;

    @OneToMany(cascade =  CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Pilot> pilots;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<FlyControler> flyControlers;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<RailWay> railWays;


    public Airport() {}

    public Airport(Long id, String airport_mark, String airport_name, String city, String location, int number_of_planes,
                   int number_of_stuff, int number_of_control_towers, State state, Pilot pilot,  List<Airplane> airplanes)
    {
        this.id = id;
        this.airport_mark = airport_mark;
        this.airport_name = airport_name;
        this.city = city;
        Location = location;
        this.number_of_planes = number_of_planes;
        this.number_of_stuff = number_of_stuff;
        this.number_of_control_towers = number_of_control_towers;
        this.state = state;
        this.pilots = pilots;
        this.airplanes = airplanes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAirport_mark() {
        return airport_mark;
    }

    public void setAirport_mark(String airport_mark) {
        this.airport_mark = airport_mark;
    }

    public String getAirport_name() {
        return airport_name;
    }

    public void setAirport_name(String airport_name) {
        this.airport_name = airport_name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public int getNumber_of_planes() {
        return number_of_planes;
    }

    public void setNumber_of_planes(int number_of_planes) {
        this.number_of_planes = number_of_planes;
    }

    public int getNumber_of_stuff() {
        return number_of_stuff;
    }

    public void setNumber_of_stuff(int number_of_stuff) {
        this.number_of_stuff = number_of_stuff;
    }

    public int getNumber_of_control_towers() {
        return number_of_control_towers;
    }

    public void setNumber_of_control_towers(int number_of_control_towers) {
        this.number_of_control_towers = number_of_control_towers;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public List<Pilot> getPilots() {
        return pilots;
    }

    public void setPilots(List<Pilot> pilots) {
        this.pilots = pilots;
    }

    public List<Airplane> getAirplanes() {
        return airplanes;
    }

    public void setAirplanes(List<Airplane> airplanes) {
        this.airplanes = airplanes;
    }

    public List<FlyControler> getFlyControlers() {
        return flyControlers;
    }

    public void setFlyControlers(List<FlyControler> flyControlers) {
        this.flyControlers = flyControlers;
    }

    public List<RailWay> getRailWays() {
        return railWays;
    }

    public void setRailWays(List<RailWay> railWays) {
        this.railWays = railWays;
    }
}
