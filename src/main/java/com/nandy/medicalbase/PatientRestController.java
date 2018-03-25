package com.nandy.medicalbase;

import com.nandy.medicalbase.domain.Comment;
import com.nandy.medicalbase.domain.Patient;
import com.nandy.medicalbase.error.UserNotFoundException;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

/**
 * Created by yana on 22.03.18.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/v1/patients")
public class PatientRestController {

    private final PatientRepository patientRepository;
    private final CommentRepository commentRepository;

    @Autowired
    PatientRestController(PatientRepository accountRepository,
                          CommentRepository commentRepository) {
        this.patientRepository = accountRepository;
        this.commentRepository = commentRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Patient getById(@PathVariable Long id) {
        return findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Patient updatePatient(@Valid @RequestBody Patient patient) {

        Patient existingPatient = findById(patient.getId());

        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setBirthDate(patient.getBirthDate());
        existingPatient.setCountry(patient.getCountry());
        existingPatient.setState(patient.getState());
        existingPatient.setAddress(patient.getAddress());
        existingPatient.setSex(patient.getSex());
        existingPatient.setComments(patient.getComments());

        return patientRepository.save(existingPatient);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deletePatient(@PathVariable Long id) {

        deleteComments(id);
        patientRepository.delete(id);
    }

    private void deleteComments(Long patientId) {
        for (Comment comment : commentRepository.findByPatientId(patientId)) {
            commentRepository.delete(comment.getId());
        }
    }

    private void saveComments(Patient patient, Collection<Comment> comments) {
        for (Comment comment : comments) {
            comment.setPatient(patient);
            commentRepository.save(comment);
        }
    }

    private Patient findById(Long patientId) {
        return patientRepository.findById(patientId)
                .orElseThrow(() -> new UserNotFoundException(patientId));
    }
}