package com.example.ISAproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class WeaponSystem
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String system_name;
    @Column
    private int number_of_rockets;
    @Column
    private String rocket_type;

    //Jedan sistem se kaci na jedan ili na vise aviona
    @OneToMany (cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<Airplane> airplanes;

    public WeaponSystem() {}

    public WeaponSystem(Long id, String system_name, int number_of_rockets, String rocket_type, List<Airplane> airplanes)
    {
        this.id = id;
        this.system_name = system_name;
        this.number_of_rockets = number_of_rockets;
        this.rocket_type = rocket_type;
        this.airplanes = airplanes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSystem_name() {
        return system_name;
    }

    public void setSystem_name(String system_name) {
        this.system_name = system_name;
    }

    public int getNumber_of_rockets() {
        return number_of_rockets;
    }

    public void setNumber_of_rockets(int number_of_rockets) {
        this.number_of_rockets = number_of_rockets;
    }

    public String getRocket_type() {
        return rocket_type;
    }

    public void setRocket_type(String rocket_type) {
        this.rocket_type = rocket_type;
    }

    public List<Airplane> getAirplanes() {
        return airplanes;
    }

    public void setAirplanes(List<Airplane> airplanes) {
        this.airplanes = airplanes;
    }
}
