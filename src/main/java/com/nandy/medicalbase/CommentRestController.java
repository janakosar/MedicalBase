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

@RestController
@RequestMapping("/{username}/comments")
public class CommentRestController {

    private final CommentRepository commentRepository;

    private final PatientRepository patientRepository;

    @Autowired
    CommentRestController(CommentRepository commentRepository,
                          PatientRepository accountRepository) {
        this.commentRepository = commentRepository;
        this.patientRepository = accountRepository;
    }

//    @RequestMapping(method = RequestMethod.GET)
//    Collection<Comment> readComments(@PathVariable String username) {
//        this.validateUser(username);
//        return this.commentRepository.findByPatientUsername(username);
//    }

//    @RequestMapping(method = RequestMethod.POST)
//    ResponseEntity<?> add(@PathVariable String userId, @RequestBody Comment input) {
//        this.validateUser(userId);
//
//        return this.patientRepository
//                .findByUsername(userId)
//                .map(account -> {
//                    Comment result = commentRepository.save(new Comment(account,
//                            input.getText(), input.getTimestamp()));
//
//                    URI location = ServletUriComponentsBuilder
//                            .fromCurrentRequest().path("/{id}")
//                            .buildAndExpand(result.getId()).toUri();
//
//                    return ResponseEntity.created(location).build();
//                })
//                .orElse(ResponseEntity.noContent().build());
//
//    }

//    @RequestMapping(method = RequestMethod.GET, value = "/{commentId}")
//    Comment readComment(@PathVariable String userId, @PathVariable Long commentId) {
//        this.validateUser(userId);
//        return this.commentRepository.findOne(commentId);
//    }

//    private void validateUser(String userId) {
//        this.patientRepository.findByUsername(userId).orElseThrow(
//                () -> new UserNotFoundException(userId));
//    }
}
