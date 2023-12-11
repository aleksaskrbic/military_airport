package com.example.ISAproject.repository;

import com.example.ISAproject.model.FlyTerm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlyTermRepository extends JpaRepository<FlyTerm, Long>
{

    List<FlyTerm> findByOrderByStart();
    List<FlyTerm> findByOrderByDuration();
    List<FlyTerm> findByOrderByIsPilotCome();

}
