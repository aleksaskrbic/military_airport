package com.example.ISAproject.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class FlyTerm
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "reservationStart", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")

    private LocalDateTime start;
    @Column(name = "reservationEnd", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")

    private LocalDateTime end;
    @Column
    private double duration;
    @Column
    private boolean isPilotCome;
    @Column
    private boolean freeTerm;
    @Column
    private boolean completedTerm;
    @Column
    private boolean pilotGotPenalty;



    //Veza sa PILOTIMA
    @ManyToOne
    @JoinColumn(name = "pilot_id")
    private Pilot pilot;

    //Veza sa AVIONIMA
    @ManyToOne
    @JoinColumn(name = "airplane_id")
    private Airplane airplane;

    //Veza sa Pistom za Letenje
    @ManyToOne
    @JoinColumn(name = "railway_id")
    private RailWay railWay;

    @ManyToOne
    @JoinColumn(name = "pilot_survey_id")
    private PilotSurvey pilotSurvey;

    @ManyToOne
    @JoinColumn(name = "mechanic_survey_id")
    private MechanicSurvey mechanicSurvey;



    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome, boolean freeTerm,
                   boolean completedTerm, boolean pilotGotPenalty, Pilot pilot, Airplane airplane,
                   RailWay railWay, PilotSurvey pilotSurvey, MechanicSurvey mechanicSurvey)
    {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.freeTerm = freeTerm;
        this.completedTerm = completedTerm;
        this.pilotGotPenalty = pilotGotPenalty;
        //this.mechanic_approved = mechanic_approved;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
        this.pilotSurvey = pilotSurvey;
        this.mechanicSurvey = mechanicSurvey;
    }



    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome, boolean freeTerm,
                   boolean completedTerm, Pilot pilot, Airplane airplane, RailWay railWay, PilotSurvey pilotSurvey,
                   MechanicSurvey mechanicSurvey) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.freeTerm = freeTerm;
        this.completedTerm = completedTerm;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
        this.pilotSurvey = pilotSurvey;
        this.mechanicSurvey = mechanicSurvey;
    }

    public FlyTerm() {}

    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome, boolean freeTerm,
                   boolean completedTerm, Pilot pilot, Airplane airplane, RailWay railWay, PilotSurvey pilotSurvey) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.freeTerm = freeTerm;
        this.completedTerm = completedTerm;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
        this.pilotSurvey = pilotSurvey;
    }

    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome,
                   boolean freeTerm, Pilot pilot, Airplane airplane, RailWay railWay)
    {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.freeTerm = freeTerm;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
    }

    //OVAJ KONSTRUKTOR, SLUZI DA BIH MOGAO DA POSTAVIM TERMIN DA JE FREE
    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome,
                   Pilot pilot, Airplane airplane, RailWay railWay)
    {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
    }

    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome,
                   boolean freeTerm, boolean completedTerm, Pilot pilot, Airplane airplane, RailWay railWay)
    {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.freeTerm = freeTerm;
        this.completedTerm = completedTerm;
        this.pilot = pilot;
        this.airplane = airplane;
        this.railWay = railWay;
    }

    public FlyTerm(Long id, LocalDateTime start, LocalDateTime end, double duration, boolean isPilotCome,
                   boolean freeTerm, boolean completedTerm, Airplane airplane, RailWay railWay)
    {
        this.id = id;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.isPilotCome = isPilotCome;
        this.freeTerm = freeTerm;
        this.completedTerm = completedTerm;
        this.airplane = airplane;
        this.railWay = railWay;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    public boolean isPilotCome() {
        return isPilotCome;
    }

    public void setPilotCome(boolean pilotCome) {
        isPilotCome = pilotCome;
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

    public boolean isFreeTerm() {
        return freeTerm;
    }

    public void setFreeTerm(boolean freeTerm) {
        this.freeTerm = freeTerm;
    }

    public boolean isCompletedTerm() {
        return completedTerm;
    }

    public void setCompletedTerm(boolean completedTerm) {
        this.completedTerm = completedTerm;
    }

    public PilotSurvey getPilotSurvey() {
        return pilotSurvey;

    }

    public void setPilotSurvey(PilotSurvey pilotSurvey) {
        this.pilotSurvey = pilotSurvey;
    }

    public MechanicSurvey getMechanicSurvey() {
        return mechanicSurvey;
    }

    public void setMechanicSurvey(MechanicSurvey mechanicSurvey) {
        this.mechanicSurvey = mechanicSurvey;
    }

    public boolean isPilotGotPenalty() {
        return pilotGotPenalty;
    }

    public void setPilotGotPenalty(boolean pilotGotPenalty) {
        this.pilotGotPenalty = pilotGotPenalty;
    }


}


