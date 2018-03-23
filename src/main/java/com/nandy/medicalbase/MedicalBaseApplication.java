package com.nandy.medicalbase;

import com.nandy.medicalbase.domain.Comment;
import com.nandy.medicalbase.domain.Patient;
import com.nandy.medicalbase.domain.Sex;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.Date;

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
							Patient p = new Patient(a+"First", a + "Second");
							p.setSex(Sex.FEMALE);
							p.setBirthDate(new Date());
							Patient patient = patientRepository.save(p);
							Comment c1 = new Comment(patient, "http://bookmark.com/1/" + a);
							c1.setCreatedDate(new Date());

							Comment c2 = new Comment(patient, "http://bookmark.com/2/" + a);
							c2.setCreatedDate(new Date());

							commentRepository.save(c1);
							commentRepository.save(c2);
						});
	}
}
