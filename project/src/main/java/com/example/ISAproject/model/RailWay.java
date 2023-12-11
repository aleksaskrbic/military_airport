package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class RailWay
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String strip_mark;
    @Column
    private int planes_on_strip;

    //PISTA I AVIONI
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Airplane> airplanes_on_strip;

    //Pista za latenje i avioni
    @ManyToOne
    @JoinColumn(name = "airport_id")
    private Airport airport;


    public RailWay() {}

    public RailWay(Long id, String strip_mark, int planes_on_strip, List<Airplane> airplanes_on_strip)
    {
        this.id = id;
        this.strip_mark = strip_mark;
        this.planes_on_strip = planes_on_strip;
        this.airplanes_on_strip = airplanes_on_strip;
    }

    public RailWay(Long id, String strip_mark, int planes_on_strip, List<Airplane> airplanes_on_strip,
                   Airport airport)
    {
        this.id = id;
        this.strip_mark = strip_mark;
        this.planes_on_strip = planes_on_strip;
        this.airplanes_on_strip = airplanes_on_strip;
        this.airport = airport;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStrip_mark() {
        return strip_mark;
    }

    public void setStrip_mark(String strip_mark) {
        this.strip_mark = strip_mark;
    }

    public int getPlanes_on_strip() {
        return planes_on_strip;
    }

    public void setPlanes_on_strip(int planes_on_strip) {
        this.planes_on_strip = planes_on_strip;
    }

    public List<Airplane> getAirplanes_on_strip() {
        return airplanes_on_strip;
    }

    public void setAirplanes_on_strip(List<Airplane> airplanes_on_strip) {
        this.airplanes_on_strip = airplanes_on_strip;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }
}