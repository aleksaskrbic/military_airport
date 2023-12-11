package com.example.ISAproject.repository;

import com.example.ISAproject.model.WeaponSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeaponSystemRepository extends JpaRepository<WeaponSystem,Long>
{

}
