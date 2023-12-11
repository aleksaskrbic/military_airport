

package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
public class Mechanic extends User
{
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Airplane> airplanes;
    @OneToMany (cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<MechanicSurvey> mechanicSurveys;

    public Mechanic() {}

    public Mechanic(Long id, String username, String password, String email, String firstName, String lastName, String mobile, String adress, String city, String state, String jmbg, String sex, String profession, String organizationInformation, boolean enabled, Timestamp lastPasswordResetDate, String role, List<Authority> authorities, List<Airplane> airplanes, List<MechanicSurvey> mechanicSurveys) {
        super(id, username, password, email, firstName, lastName, mobile, adress, city, state, jmbg, sex, profession, organizationInformation, enabled, lastPasswordResetDate, role, authorities);
        this.airplanes = airplanes;
        this.mechanicSurveys = mechanicSurveys;
    }

    public List<Airplane> getAirplanes() {
        return airplanes;
    }

    public void setAirplanes(List<Airplane> airplanes) {
        this.airplanes = airplanes;
    }

    public List<MechanicSurvey> getMechanicSurveys() {
        return mechanicSurveys;
    }

    public void setMechanicSurveys(List<MechanicSurvey> mechanicSurveys) {
        this.mechanicSurveys = mechanicSurveys;
    }
}
