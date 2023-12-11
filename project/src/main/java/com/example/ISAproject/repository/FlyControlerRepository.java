package com.example.ISAproject.repository;

import com.example.ISAproject.model.FlyControler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlyControlerRepository extends JpaRepository<FlyControler, Long>
{

}
