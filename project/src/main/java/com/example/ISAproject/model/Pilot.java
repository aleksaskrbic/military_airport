package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
public class Pilot extends User
{

    @OneToOne
    @JoinColumn(name = "airport_id")
    private Airport airport;
    @Column
    private String cin;
    @Column
    private int points;

    @OneToMany(cascade =  CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<FlyTerm> flyTerms;

    @OneToMany (cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<PilotSurvey> pilotSurveys;





    public Pilot() {}

    public Pilot(Long id, String username, String password, String email, String firstName, String lastName, String mobile, String adress, String city, String state, String jmbg, String sex, String profession, String organizationInformation, boolean enabled, Timestamp lastPasswordResetDate, String role, List<Authority> authorities, Airport airport, String cin, int points, List<FlyTerm> flyTerms) {
        super(id, username, password, email, firstName, lastName, mobile, adress, city, state, jmbg, sex, profession, organizationInformation, enabled, lastPasswordResetDate, role, authorities);
        this.airport = airport;
        this.cin = cin;
        this.points = points;
        this.flyTerms = flyTerms;
    }

    public Pilot(Long id, String username, String password, String email, String firstName, String lastName, String mobile, String adress, String city, String state, String jmbg, String sex, String profession, String organizationInformation, boolean enabled, Timestamp lastPasswordResetDate, String role, List<Authority> authorities, Airport airport, String cin, int points, List<FlyTerm> flyTerms, List<PilotSurvey> pilotSurveys) {
        super(id, username, password, email, firstName, lastName, mobile, adress, city, state, jmbg, sex, profession, organizationInformation, enabled, lastPasswordResetDate, role, authorities);
        this.airport = airport;
        this.cin = cin;
        this.points = points;
        this.flyTerms = flyTerms;
        this.pilotSurveys = pilotSurveys;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public List<FlyTerm> getFlyTerms() {
        return flyTerms;
    }

    public void setFlyTerms(List<FlyTerm> flyTerms) {
        this.flyTerms = flyTerms;
    }

    public List<PilotSurvey> getPilotSurveys() {
        return pilotSurveys;
    }

    public void setPilotSurveys(List<PilotSurvey> pilotSurveys) {
        this.pilotSurveys = pilotSurveys;
    }
}
