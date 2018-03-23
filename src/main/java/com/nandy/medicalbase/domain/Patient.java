package com.nandy.medicalbase.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by yana on 22.03.18.
 */
@Entity
public class Patient {

    @Id
    @GeneratedValue
    private long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date birthDate;

    private String firstName;
    private String lastName;

    private Sex sex;

    private String country;
    private String state;
    private String address;

    @OneToMany(mappedBy = "patient")
    private List<Comment> comments;

    private Patient() { }

    public Patient(final String firstName, final String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Sex getSex() {
        return sex;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }
}
