package com.nandy.medicalbase.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by yana on 22.03.18.
 */
@Entity
public class Comment {

    @Id
    @GeneratedValue
    private long id;

    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdDate;

    private String text;

    @JsonIgnore
    @ManyToOne
    private Patient patient;

    private Comment() { }

    public Comment(final Patient patient, final String text) {
        this.patient = patient;
        this.text = text;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
