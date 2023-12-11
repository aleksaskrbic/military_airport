package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Airplane
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String registrationMark;
    @Column
    private String airplane_name;
    @Column
    private String airplaneType;
    @Column
    private int seat_number;
    @Column
    private double maximum_speed;
    @Column
    private double length_wings;
    @Column
    private String pogon;
    @Column
    private double maximum_high;
    @Column
    private double tactical_radius;
    @Column
    private double rocket_radius;
    @Column
    private double fuel_reserve;
    @Column
    private boolean enabled;

    //Avion i sistem za naoruzanje
    @OneToOne
    private WeaponSystem weaponSystem;

    //Avion i Aerodrom
    @ManyToOne
    @JoinColumn(name = "airport_id")
    private Airport airport;

    //Avion i Termini
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<FlyTerm> flyTerms;

    //Avion i Piste Za Letenje
    @ManyToOne
    @JoinColumn(name = "railway_id")
    private RailWay railWay;

    //Avion i Mehanicari
    @ManyToOne
    @JoinColumn(name = "mechanic_id")
    private Mechanic mechanic;

    public Airplane() {}

    public Airplane(Long id, String registrationMark, String airplane_name, String airplaneType, int seat_number, double maximum_speed,
                    double length_wings, String pogon, double maximum_high, double tactical_radius, double rocket_radius,
                    double fuel_reserve, boolean enabled, WeaponSystem weaponSystem, Airport airport, List<FlyTerm> flyTerms,
                    RailWay railWay, Mechanic mechanic) {
        this.id = id;
        this.registrationMark = registrationMark;
        this.airplane_name = airplane_name;
        this.airplaneType = airplaneType;
        this.seat_number = seat_number;
        this.maximum_speed = maximum_speed;
        this.length_wings = length_wings;
        this.pogon = pogon;
        this.maximum_high = maximum_high;
        this.tactical_radius = tactical_radius;
        this.rocket_radius = rocket_radius;
        this.fuel_reserve = fuel_reserve;
        this.enabled = enabled;
        this.weaponSystem = weaponSystem;
        this.airport = airport;
        this.flyTerms = flyTerms;
        this.railWay = railWay;
        this.mechanic = mechanic;
    }

    public Airplane(Long id, String registrationMark, String airplane_name, String airplaneType, int seat_number, double maximum_speed,
                    double length_wings, String pogon, double maximum_high, double tactical_radius, double rocket_radius,
                    boolean enabled, WeaponSystem weaponSystem, Airport airport, List<FlyTerm> flyTerms, RailWay railWay,
                    Mechanic mechanic)
    {
        this.id = id;
        this.registrationMark = registrationMark;
        this.airplane_name = airplane_name;
        this.airplaneType = airplaneType;
        this.seat_number = seat_number;
        this.maximum_speed = maximum_speed;
        this.length_wings = length_wings;
        this.pogon = pogon;
        this.maximum_high = maximum_high;
        this.tactical_radius = tactical_radius;
        this.rocket_radius = rocket_radius;
        this.enabled = enabled;
        this.weaponSystem = weaponSystem;
        this.airport = airport;
        this.flyTerms = flyTerms;
        this.railWay = railWay;
        this.mechanic = mechanic;
    }

    public Airplane(Long id, String registrationMark, String airplane_name, String airplaneType, int seat_number,
                    WeaponSystem weaponSystem, Airport airport, List<FlyTerm> flyTerms, RailWay railWay)
    {
        this.id = id;
        this.registrationMark = registrationMark;
        this.airplane_name = airplane_name;
        this.airplaneType = airplaneType;
        this.seat_number = seat_number;
        this.weaponSystem = weaponSystem;
        this.airport = airport;
        this.flyTerms = flyTerms;
        this.railWay = railWay;
    }

    //Avion sa Mehanicarom


    public Airplane(Long id, String registrationMark, String airplane_name, String airplaneType,
                    int seat_number, WeaponSystem weaponSystem, Airport airport, List<FlyTerm> flyTerms,
                    RailWay railWay, Mechanic mechanic)
    {
        this.id = id;
        this.registrationMark = registrationMark;
        this.airplane_name = airplane_name;
        this.airplaneType = airplaneType;
        this.seat_number = seat_number;
        this.weaponSystem = weaponSystem;
        this.airport = airport;
        this.flyTerms = flyTerms;
        this.railWay = railWay;
        this.mechanic = mechanic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegistrationMark() {
        return registrationMark;
    }

    public void setRegistrationMark(String registration_mark_airplane) {
        this.registrationMark = registration_mark_airplane;
    }

    public String getAirplane_name() {
        return airplane_name;
    }

    public void setAirplane_name(String airplane_name) {
        this.airplane_name = airplane_name;
    }

    public String getAirplaneType() {
        return airplaneType;
    }

    public void setAirplaneType(String airplane_type) {
        this.airplaneType = airplane_type;
    }

    public int getSeat_number() {
        return seat_number;
    }

    public void setSeat_number(int seat_number) {
        this.seat_number = seat_number;
    }

    public WeaponSystem getWeaponSystem() {
        return weaponSystem;
    }

    public void setWeaponSystem(WeaponSystem weaponSystem) {
        this.weaponSystem = weaponSystem;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }

    public List<FlyTerm> getFlyTerms() {
        return flyTerms;
    }

    public void setFlyTerms(List<FlyTerm> flyTerms) {
        this.flyTerms = flyTerms;
    }

    public RailWay getRailWay() {
        return railWay;
    }

    public void setRailWay(RailWay railWay) {
        this.railWay = railWay;
    }

    public Mechanic getMechanic() {
        return mechanic;
    }

    public void setMechanic(Mechanic mechanic) {
        this.mechanic = mechanic;
    }

    public double getMaximum_speed() {
        return maximum_speed;
    }

    public void setMaximum_speed(double maximum_speed) {
        this.maximum_speed = maximum_speed;
    }

    public double getLength_wings() {
        return length_wings;
    }

    public void setLength_wings(double length_wings) {
        this.length_wings = length_wings;
    }

    public String getPogon() {
        return pogon;
    }

    public void setPogon(String pogon) {
        this.pogon = pogon;
    }

    public double getMaximum_high() {
        return maximum_high;
    }

    public void setMaximum_high(double maximum_high) {
        this.maximum_high = maximum_high;
    }

    public double getTactical_radius() {
        return tactical_radius;
    }

    public void setTactical_radius(double tactical_radius) {
        this.tactical_radius = tactical_radius;
    }

    public double getRocket_radius() {
        return rocket_radius;
    }

    public void setRocket_radius(double rocket_radius) {
        this.rocket_radius = rocket_radius;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public double getFuel_reserve() {
        return fuel_reserve;
    }

    public void setFuel_reserve(double fuel_reserve) {
        this.fuel_reserve = fuel_reserve;
    }
}
