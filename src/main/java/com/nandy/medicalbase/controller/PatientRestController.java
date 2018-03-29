package com.nandy.medicalbase.controller;

import com.nandy.medicalbase.domain.Comment;
import com.nandy.medicalbase.domain.Patient;
import com.nandy.medicalbase.error.UserNotFoundException;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by yana on 22.03.18.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/v1/patients")
public class PatientRestController {

    private final PatientRepository mPatientRepository;
    private final CommentRepository mCommentRepository;

    @Autowired
    PatientRestController(PatientRepository accountRepository,
                          CommentRepository commentRepository) {
        this.mPatientRepository = accountRepository;
        this.mCommentRepository = commentRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Patient> getPatients() {
        return mPatientRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Patient getById(@PathVariable Long id) {
        return findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Patient addPatient(@RequestBody Patient patient) {
        return mPatientRepository.save(patient);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Patient updatePatient(@Valid @RequestBody Patient patient) {
        return mPatientRepository.save(patient);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deletePatient(@PathVariable Long id) {

        deleteComments(id);
        mPatientRepository.delete(id);
    }

    private void deleteComments(Long patientId) {
        for (Comment comment : mCommentRepository.findByPatientId(patientId)) {
            mCommentRepository.delete(comment.getId());
        }
    }

    private Patient findById(Long patientId) {
        return mPatientRepository.findById(patientId)
                .orElseThrow(() -> new UserNotFoundException(patientId));
    }
}
