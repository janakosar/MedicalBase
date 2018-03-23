package com.nandy.medicalbase;

import com.nandy.medicalbase.domain.Patient;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class MedicalBaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicalBaseApplication.class, args);
	}

	@Bean
	CommandLineRunner init(PatientRepository patientRepository,
						   CommentRepository commentRepository) {
		return (evt) -> Arrays.asList(
				"jhoeller,dsyer,pwebb,ogierke,rwinch,mfisher,mpollack,jlong".split(","))
				.forEach(
						a -> {
							Patient patient = patientRepository.save(new Patient(a));
//							commentRepository.save(new Comment(patient, "http://bookmark.com/1/" + a, System.currentTimeMillis()));
//							commentRepository.save(new Comment(patient, "http://bookmark.com/2/" + a, System.currentTimeMillis()));
						});
	}
}
