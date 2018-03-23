package com.nandy.medicalbase;

import com.nandy.medicalbase.domain.Comment;
import com.nandy.medicalbase.error.UserNotFoundException;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Collection;

/**
 * Created by yana on 23.03.18.
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/patients/{patientId}/comments")
public class CommentRestController {

    private final CommentRepository commentRepository;

    private final PatientRepository patientRepository;

    @Autowired
    CommentRestController(CommentRepository commentRepository,
                          PatientRepository accountRepository) {
        this.commentRepository = commentRepository;
        this.patientRepository = accountRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    Collection<Comment> getAll(@PathVariable Long patientId) {
        this.validatePatient(patientId);
        return this.commentRepository.findByPatientId(patientId);
    }

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable Long patientId, @RequestBody Comment input) {
        this.validatePatient(patientId);

        return this.patientRepository.findById(patientId)
                .map(patient -> {
                    Comment result = commentRepository.save(new Comment(patient, input.getText()));

                    URI location = ServletUriComponentsBuilder
                            .fromCurrentRequest().path("/{id}")
                            .buildAndExpand(result.getId()).toUri();

                    return ResponseEntity.created(location).build();
                })
                .orElse(ResponseEntity.noContent().build());

    }

    @RequestMapping(method = RequestMethod.GET, value = "/{commentId}")
    Comment get(@PathVariable Long patientId, @PathVariable Long commentId) {
        this.validatePatient(patientId);
        return this.commentRepository.findOne(commentId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void delete(@PathVariable Long id){
        commentRepository.delete(id);
    }

    private void validatePatient(Long patientId) {
        this.patientRepository.findById(patientId)
                .orElseThrow(() -> new UserNotFoundException(patientId));
    }
}
