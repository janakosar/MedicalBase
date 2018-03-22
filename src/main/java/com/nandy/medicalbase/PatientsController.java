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
        modifiedUser.setFirstName(patient.getFirstName());
        modifiedUser.setLastName(patient.getLastName());
        modifiedUser.setComments(patient.getComments());
        return modifiedUser;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deletePatient(@PathVariable Long id) {
        Patient deletePatient = this.patients.stream().filter(patient -> patient.getId() == id).findFirst().orElse(null);
        if (deletePatient != null) {
            this.patients.remove(deletePatient);
            return true;
        } else {
            return false;
        }


    }

    List<Patient> buildPatients() {
        List<Patient> patients = new ArrayList<>();

        Patient patient1 = new Patient("John Doe");
        Patient patient2 = new Patient("Jon Smith");
        Patient patient3 = new Patient("Will Craig");
        Patient patient4 = new Patient("Sam Lernorad");
        Patient patient5 = new Patient("Ross Doe");

        patients.add(patient1);
        patients.add(patient2);
        patients.add(patient3);
        patients.add(patient4);
        patients.add(patient5);

        return patients;

    }

}
