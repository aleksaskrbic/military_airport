package com.example.ISAproject.repository;


import com.example.ISAproject.model.Pilot;
import com.example.ISAproject.model.PilotSurvey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PilotSurveyRepository extends JpaRepository<PilotSurvey, Long>
{
    PilotSurvey findPilotSurveyByPilotId(Long id);
}
