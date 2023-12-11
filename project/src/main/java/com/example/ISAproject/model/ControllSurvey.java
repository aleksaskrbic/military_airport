package com.example.ISAproject.model;

import javax.persistence.*;

@Entity
public class ControllSurvey
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Oprema
    @Column
    private int number_of_rockets;
    @Column
    private String rocket_type;
    @Column
    private double road_length;
    @Column
    private double fuel_used;

    //Misija
    @Column
    private String mission_type;
    @Column
    private String mission_success;
    @Column
    private String extra_note;
    @Column
    private String plane_damage;
    @Column
    private String mission_goal;

    @OneToOne
    private FlyTerm flyTerm;

    public ControllSurvey() {}

    public ControllSurvey(Long id, int number_of_rockets, String rocket_type, double road_length, double fuel_used, String mission_type,
                          String mission_success, String extra_note)
    {
        this.id = id;
        this.number_of_rockets = number_of_rockets;
        this.rocket_type = rocket_type;
        this.road_length = road_length;
        this.fuel_used = fuel_used;
        this.mission_type = mission_type;
        this.mission_success = mission_success;
        this.extra_note = extra_note;
    }

    public ControllSurvey(Long id, int number_of_rockets, String rocket_type, double road_length, double fuel_used, String mission_type,
                          String mission_success, String extra_note, String plane_damage, String mission_goal, FlyTerm flyTerm)
    {
        this.id = id;
        this.number_of_rockets = number_of_rockets;
        this.rocket_type = rocket_type;
        this.road_length = road_length;
        this.fuel_used = fuel_used;
        this.mission_type = mission_type;
        this.mission_success = mission_success;
        this.extra_note = extra_note;
        this.plane_damage = plane_damage;
        this.mission_goal = mission_goal;
        this.flyTerm = flyTerm;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public double getRoad_length() {
        return road_length;
    }

    public void setRoad_length(double road_length) {
        this.road_length = road_length;
    }

    public double getFuel_used() {
        return fuel_used;
    }

    public void setFuel_used(double fuel_used) {
        this.fuel_used = fuel_used;
    }

    public String getMission_type() {
        return mission_type;
    }

    public void setMission_type(String mission_type) {
        this.mission_type = mission_type;
    }

    public String getMission_success() {
        return mission_success;
    }

    public void setMission_success(String mission_success) {
        this.mission_success = mission_success;
    }

    public String getExtra_note() {
        return extra_note;
    }

    public void setExtra_note(String extra_note) {
        this.extra_note = extra_note;
    }

    public String getPlane_damage() {
        return plane_damage;
    }

    public void setPlane_damage(String plane_damage) {
        this.plane_damage = plane_damage;
    }

    public String getMission_goal() {
        return mission_goal;
    }

    public void setMission_goal(String mission_goal) {
        this.mission_goal = mission_goal;
    }

    public FlyTerm getFlyTerm() {
        return flyTerm;
    }

    public void setFlyTerm(FlyTerm flyTerm) {
        this.flyTerm = flyTerm;
    }
}
