package com.nandy.medicalbase;

import com.nandy.medicalbase.domain.Patient;
import com.nandy.medicalbase.error.UserNotFoundException;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by yana on 22.03.18.
 */
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/v1/patients")
public class PatientRestController {

    private final PatientRepository patientRepository;

    @Autowired
    PatientRestController(PatientRepository accountRepository) {
        this.patientRepository = accountRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Patient getById(@PathVariable Long id) {
        return patientRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Patient updatePatient(@Valid @RequestBody Patient patient) {

        if (!patientRepository.exists(patient.getId())){
            throw new UserNotFoundException(String.valueOf(patient.getId()));
        }

        Patient existingPatient = patientRepository.findOne(patient.getId());
        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setBirthTimestamp(patient.getBirthTimestamp());
        existingPatient.setCountry(patient.getCountry());
        existingPatient.setState(patient.getState());
        existingPatient.setAddress(patient.getAddress());
//        existingPatient.setComments(patient.getComments());
        existingPatient.setUsername(patient.getUsername());

        return patientRepository.save(existingPatient);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deletePatient(@PathVariable Long id) {
        patientRepository.delete(id);
    }
}
