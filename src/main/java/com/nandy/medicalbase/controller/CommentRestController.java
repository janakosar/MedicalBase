package com.nandy.medicalbase.controller;

import com.nandy.medicalbase.domain.Comment;
import com.nandy.medicalbase.error.UserNotFoundException;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by yana on 23.03.18.
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/patients/{patientId}/comments")
public class CommentRestController {

    private final CommentRepository mCommentRepository;
    private final PatientRepository mPatientRepository;

    @Autowired
    CommentRestController(CommentRepository commentRepository,
                          PatientRepository accountRepository) {
        this.mCommentRepository = commentRepository;
        this.mPatientRepository = accountRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    Collection<Comment> getAll(@PathVariable Long patientId) {
        return this.mCommentRepository.findByPatientId(patientId);
    }

    @RequestMapping(method = RequestMethod.POST)
    Comment add(@PathVariable Long patientId, @RequestBody Comment input) {
        return saveComment(patientId, input);

    }

    @RequestMapping(method = RequestMethod.PUT)
    public Comment update(@PathVariable Long patientId, @RequestBody Comment comment) {
        return saveComment(patientId, comment);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{commentId}")
    Comment get(@PathVariable Long patientId, @PathVariable Long commentId) {

        if (mPatientRepository.exists(patientId)){
            return this.mCommentRepository.findOne(commentId);
        }else {
            return null;
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void delete(@PathVariable Long id) {
        mCommentRepository.delete(id);
    }

    private Comment saveComment(Long patientId, Comment comment) {
        return this.mPatientRepository.findById(patientId)
                .map(patient -> {
                    comment.setPatient(patient);
                    return mCommentRepository.save(comment);
                })
                .orElseThrow(() -> new UserNotFoundException(patientId));
    }

}
