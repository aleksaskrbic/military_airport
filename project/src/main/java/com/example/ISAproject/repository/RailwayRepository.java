package com.example.ISAproject.repository;

import com.example.ISAproject.model.RailWay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RailwayRepository extends JpaRepository<RailWay, Long>
{

}
