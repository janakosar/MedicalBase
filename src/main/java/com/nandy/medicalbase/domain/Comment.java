package com.nandy.medicalbase.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by yana on 22.03.18.
 */
@Entity
public class Comment {

    @Id
    @GeneratedValue
    private long id;
    private long timestamp;
    private String text;

    @JsonIgnore
    @ManyToOne
    private Patient patient;

    private Comment() { }

    public Comment(final Patient patient, final String text, final long timestamp) {
        this.patient = patient;
        this.text = text;
        this.timestamp = timestamp;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
