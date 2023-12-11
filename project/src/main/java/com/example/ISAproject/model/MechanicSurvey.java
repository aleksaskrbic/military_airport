package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class MechanicSurvey
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String email;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String mobile;
    @Column
    private String adress;
    @Column
    private String city;
    @Column
    private String state;

    @Column
    private String p1;
    @Column
    private String p2;
    @Column
    private String p3;
    @Column
    private String p4;
    @Column
    private String p5;
    @Column
    private String p6;
    @Column
    private String p7;
    @Column
    private String p8;
    @Column
    private boolean mechanic_approved;

    @OneToOne
    private Mechanic mechanic;

    @OneToMany (cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<FlyTerm> flyTerms;

    public MechanicSurvey() {}

    public MechanicSurvey(Long id, String email, String firstName, String lastName, String mobile, String adress, String city,
                          String state, String p1, String p2, String p3, String p4, String p5, String p6, String p7, String p8,
                          boolean mechanic_approved, Mechanic mechanic, List<FlyTerm> flyTerms)
    {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.adress = adress;
        this.city = city;
        this.state = state;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.p5 = p5;
        this.p6 = p6;
        this.p7 = p7;
        this.p8 = p8;
        this.mechanic_approved = mechanic_approved;
        this.mechanic = mechanic;
        this.flyTerms = flyTerms;
    }

    public MechanicSurvey(Long id, String email, String firstName, String lastName, String mobile, String adress, String city,
                          String state, String p1, String p2, String p3, String p4, String p5, String p6, String p7, String p8,
                          Mechanic mechanic, List<FlyTerm> flyTerms)
    {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.adress = adress;
        this.city = city;
        this.state = state;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.p5 = p5;
        this.p6 = p6;
        this.p7 = p7;
        this.p8 = p8;
        this.mechanic = mechanic;
        this.flyTerms = flyTerms;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getP1() {
        return p1;
    }

    public void setP1(String p1) {
        this.p1 = p1;
    }

    public String getP2() {
        return p2;
    }

    public void setP2(String p2) {
        this.p2 = p2;
    }

    public String getP3() {
        return p3;
    }

    public void setP3(String p3) {
        this.p3 = p3;
    }

    public String getP4() {
        return p4;
    }

    public void setP4(String p4) {
        this.p4 = p4;
    }

    public String getP5() {
        return p5;
    }

    public void setP5(String p5) {
        this.p5 = p5;
    }

    public String getP6() {
        return p6;
    }

    public void setP6(String p6) {
        this.p6 = p6;
    }

    public String getP7() {
        return p7;
    }

    public void setP7(String p7) {
        this.p7 = p7;
    }

    public String getP8() {
        return p8;
    }

    public void setP8(String p8) {
        this.p8 = p8;
    }

    public Mechanic getMechanic() {
        return mechanic;
    }

    public void setMechanic(Mechanic mechanic) {
        this.mechanic = mechanic;
    }

    public List<FlyTerm> getFlyTerms() {
        return flyTerms;
    }

    public void setFlyTerms(List<FlyTerm> flyTerms) {
        this.flyTerms = flyTerms;
    }

    public boolean isMechanic_approved() {
        return mechanic_approved;
    }

    public void setMechanic_approved(boolean mechanic_approved) {
        this.mechanic_approved = mechanic_approved;
    }
}
