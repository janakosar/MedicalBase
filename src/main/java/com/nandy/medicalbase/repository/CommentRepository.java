package com.nandy.medicalbase.repository;

import com.nandy.medicalbase.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

/**
 * Created by yana on 23.03.18.
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Collection<Comment> findByPatientId(Long id);
}
