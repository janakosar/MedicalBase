package com.nandy.medicalbase;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yana on 22.03.18.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/patients")
public class PatientsController {

    private List<Patient> patients = new ArrayList();


    PatientsController() {
        this.patients = buildPatients();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Patient> getPatients() {
        return this.patients;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Patient getPatient(@PathVariable("id") Long id) {
        return this.patients.stream()
                .filter(patient -> patient.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Patient savePatient(@RequestBody Patient patient) {
        Long nextId = 0L;
        if (this.patients.size() != 0) {
            Patient lastPatient = this.patients.stream()
                    .skip(this.patients.size() - 1)
                    .findFirst().orElse(null);
            nextId = lastPatient.getId() + 1;
        }

        patient.setId(nextId);
        this.patients.add(patient);
        return patient;

    }

    @RequestMapping(method = RequestMethod.PUT)
    public Patient updatePatient(@RequestBody Patient patient) {
        Patient modifiedUser = this.patients.stream().filter(p -> p.getId() == patient.getId()).findFirst().orElse(null);
        modifiedUser.setName(patient.getName());
        modifiedUser.setMedicalNote(patient.getMedicalNote());
        return modifiedUser;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deletePatient(@PathVariable Long id) {
        Patient deletePatient = this.patients.stream().filter(patient -> patient.getId() == id).findFirst().orElse(null);
        if (deletePatient != null) {
            this.patients.remove(deletePatient);
            return true;
        } else  {
            return false;
        }


    }

    List<Patient> buildPatients() {
        List<Patient> patients = new ArrayList<>();

        Patient patient1 = buildPatient(1L, "John Doe", "John Doe's medical note");
        Patient patient2 = buildPatient(2L, "Jon Smith", "Jon Smith's medical note");
        Patient patient3 = buildPatient(3L, "Will Craig", "Will Craig's medical note");
        Patient patient4 = buildPatient(4L, "Sam Lernorad", "Sam Lernorad's medical note");
        Patient patient5 = buildPatient(5L, "Ross Doe", "Ross Doe's medical note");

        patients.add(patient1);
        patients.add(patient2);
        patients.add(patient3);
        patients.add(patient4);
        patients.add(patient5);

        return patients;

    }

    Patient buildPatient(Long id, String name, String medicalNote) {
        Patient user = new Patient();
        user.setId(id);
        user.setName(name);
        user.setMedicalNote(medicalNote);
        return user;
    }
}
