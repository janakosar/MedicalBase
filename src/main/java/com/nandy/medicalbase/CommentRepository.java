package com.nandy.medicalbase;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

/**
 * Created by yana on 23.03.18.
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Collection<Comment> findByPatientUsername(String username);
}
