package com.nandy.medicalbase;

/**
 * Created by yana on 22.03.18.
 */
public class Patient {

    private long id;
    private String name;
    private String medicalNote;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMedicalNote() {
        return medicalNote;
    }

    public void setMedicalNote(String medicalNote) {
        this.medicalNote = medicalNote;
    }
}
