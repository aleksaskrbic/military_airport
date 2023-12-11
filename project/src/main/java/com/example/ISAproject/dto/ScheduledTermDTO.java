package com.example.ISAproject.dto;

public class ScheduledTermDTO
{
    private Long flyTermId;
    private Long pilotId;
    private Long pilotSurveyId;
    private Long mechanicId;
    private Long mechanicSurveyId;

    public ScheduledTermDTO() {}

   /* public ScheduledTermDTO(Long flyTermId, Long pilotId)
    {
        this.flyTermId = flyTermId;
        this.pilotId = pilotId;
    }*/

    public ScheduledTermDTO(Long flyTermId, Long mechanicSurveyId) {
        this.flyTermId = flyTermId;
        this.mechanicSurveyId = mechanicSurveyId;
    }

    public ScheduledTermDTO(Long flyTermId, Long pilotId, Long pilotSurveyId) {
        this.flyTermId = flyTermId;
        this.pilotId = pilotId;
        this.pilotSurveyId = pilotSurveyId;
    }




    public Long getFlyTermId() {
        return flyTermId;
    }

    public void setFlyTermId(Long flyTermId) {
        this.flyTermId = flyTermId;
    }

    public Long getPilotId() {
        return pilotId;
    }

    public void setPilotId(Long pilotId) {
        this.pilotId = pilotId;
    }

    public Long getPilotSurveyId() {
        return pilotSurveyId;
    }

    public void setPilotSurveyId(Long pilotSurveyId) {
        this.pilotSurveyId = pilotSurveyId;
    }

    public Long getMechanicId() {
        return mechanicId;
    }

    public void setMechanicId(Long mechanicId) {
        this.mechanicId = mechanicId;
    }

    public Long getMechanicSurveyId() {
        return mechanicSurveyId;
    }

    public void setMechanicSurveyId(Long mechanicSurveyId) {
        this.mechanicSurveyId = mechanicSurveyId;
    }
}


