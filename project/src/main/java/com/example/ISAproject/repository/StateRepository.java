package com.example.ISAproject.repository;

import ch.qos.logback.core.joran.event.stax.StaxEvent;
import com.example.ISAproject.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends JpaRepository<State, Long>
{

}
