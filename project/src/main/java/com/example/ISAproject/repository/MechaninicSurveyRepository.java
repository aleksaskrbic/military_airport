package com.example.ISAproject.repository;

import com.example.ISAproject.model.MechanicSurvey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MechaninicSurveyRepository extends JpaRepository<MechanicSurvey, Long>
{
}
