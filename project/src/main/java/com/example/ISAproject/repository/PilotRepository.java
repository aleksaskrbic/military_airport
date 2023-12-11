package com.example.ISAproject.repository;

import com.example.ISAproject.model.Pilot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PilotRepository extends JpaRepository<Pilot, Long>
{
      Pilot findPilotByUsername(String username);
}
