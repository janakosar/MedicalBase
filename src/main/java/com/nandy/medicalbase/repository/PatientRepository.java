package com.nandy.medicalbase.repository;

import com.nandy.medicalbase.domain.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by yana on 22.03.18.
 */
public interface PatientRepository  extends JpaRepository<Patient, Long> {

    Optional<Patient> findById(Long id);
}