package com.example.ISAproject.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class FlyControler extends User
{
    @OneToOne
    @JoinColumn(name = "airport_id")
    private Airport airport;

    public FlyControler() {}

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }
}
