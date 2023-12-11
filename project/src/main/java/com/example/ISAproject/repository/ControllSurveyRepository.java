package com.example.ISAproject.repository;

import com.example.ISAproject.model.ControllSurvey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ControllSurveyRepository extends JpaRepository<ControllSurvey, Long>
{
}
