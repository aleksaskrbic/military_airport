package com.example.ISAproject.dto;

import com.example.ISAproject.model.Airplane;
import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.model.RailWay;

public class DefinedTermDTO
{
    private Long id;
    private String start;
    private String end;
    private double duration;
    private Pilot pilot;
    private Airplane airplane;
    private RailWay railWay;


    public DefinedTermDTO() {}

    public DefinedTermDTO(Long id, String start, String end, double duration, Pilot pilot, Airplane airplane, RailWay railWay) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    public Pilot getPilot() {
        return pilot;
    }

    public void setPilot(Pilot pilot) {
        this.pilot = pilot;
    }

    public Airplane getAirplane() {
        return airplane;
    }

    public void setAirplane(Airplane airplane) {
        this.airplane = airplane;
    }

    public RailWay getRailWay() {
        return railWay;
    }

    public void setRailWay(RailWay railWay) {
        this.railWay = railWay;
    }
}


