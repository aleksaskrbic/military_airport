package com.example.ISAproject.repository;

import com.example.ISAproject.model.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirplaneRepository extends JpaRepository<Airplane, Long>
{

     List<Airplane> findByOrderByAirplaneType();
     List<Airplane> findByOrderByRegistrationMark();
     List<Airplane> findByOrderByWeaponSystem();
     List<Airplane> findByAirplaneType(String airplane_type);
     Airplane findAirplaneByRegistrationMark(String registration_mark);




}
