package com.nandy.medicalbase;

import com.nandy.medicalbase.domain.Comment;
import com.nandy.medicalbase.domain.Patient;
import com.nandy.medicalbase.domain.Sex;
import com.nandy.medicalbase.repository.CommentRepository;
import com.nandy.medicalbase.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@SpringBootApplication
public class MedicalBaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(MedicalBaseApplication.class, args);
    }

    @Bean
    FilterRegistrationBean corsFilter(
            @Value("${tagit.origin:http://localhost:4200}") String origin) {
        return new FilterRegistrationBean(new Filter() {
            public void doFilter(ServletRequest req, ServletResponse res,
                                 FilterChain chain) throws IOException, ServletException {
                HttpServletRequest request = (HttpServletRequest) req;
                HttpServletResponse response = (HttpServletResponse) res;
                String method = request.getMethod();
                response.setHeader("Access-Control-Allow-Origin", origin);
                response.setHeader("Access-Control-Allow-Methods",
                        "POST,GET,OPTIONS,DELETE,PUT");
                response.setHeader("Access-Control-Max-Age", Long.toString(60 * 60));
                response.setHeader("Access-Control-Allow-Credentials", "true");
                response.setHeader(
                        "Access-Control-Allow-Headers",
                        "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
                if ("OPTIONS".equals(method)) {
                    response.setStatus(HttpStatus.OK.value());
                } else {
                    chain.doFilter(req, res);
                }
            }

            public void init(FilterConfig filterConfig) {
            }

            public void destroy() {
            }
        });
    }

    @Bean
    CommandLineRunner init(PatientRepository patientRepository,
                           CommentRepository commentRepository) {

//        Random random = new Random();

        return (evt) -> getInitialPatientList()
                .forEach(
                        pa -> {
                            Patient patient = patientRepository.save(pa);
                            commentRepository.save(
                                    new Comment(patient, "Lorem ipsum dolor sit amet.", new Date()));
                            commentRepository.save(
                                    new Comment(patient, "Lorem ipsum dolor sit amet.", new Date()));

                        });
    }

//    private void createAndSaveComments(CommentRepository commentRepository,
//                                       Patient patient,
//                                       int commentsCount) {
//
//        for (int i = 0; i < commentsCount; commentsCount++) {
//
//            commentRepository.save(
//                    new Comment(
//                            patient,
//                            "Lorem ipsum dolor sit amet.",
//                            new Date()));
//
//        }
//    }

    private List<Patient> getInitialPatientList() {
        List<Patient> patients = new ArrayList<>();

        patients.add(createPatient("Jaime", "Lannister",
                getDate(19, 4, 1974), Sex.MALE,
                "The Westerlands", "The Crownlands", "The Crownlands"));
        patients.add(createPatient("Cersei", "Lannister",
                getDate(17, 10, 1973), Sex.FEMALE,
                "The Westerlands", "The Crownlands", "The Crownlands"));
        patients.add(createPatient("Daenerys", "Targaryen",
                getDate(22, 8, 1990), Sex.FEMALE,
                "The Crownlands", "The Crownlands", "The Crownlands"));
        patients.add(createPatient("Jorah", "Mormont",
                getDate(6, 6, 1968), Sex.MALE,
                "The North", "The North", "The North"));
        patients.add(createPatient("Jon", "Snow",
                getDate(11, 9, 1985), Sex.MALE,
                "The North", "The North", "The North"));
        patients.add(createPatient("Sansa", "Stark",
                getDate(25, 11, 1990), Sex.FEMALE,
                "The Crownlands", "The Crownlands", "The Crownlands"));
        patients.add(createPatient("Arya", "Stark",
                getDate(15, 7, 1995), Sex.FEMALE,
                "The North", "The North", "The North"));
        patients.add(createPatient("Theon", "Greyjoy",
                getDate(25, 11, 1988), Sex.MALE,
                "Iron Islands", "Iron Islands", "Iron Islands"));
        patients.add(createPatient("Tyrion", "Lannister",
                getDate(15, 7, 1975), Sex.MALE,
                "The Westerlands", "The Westerlands", "The Westerlands"));
        patients.add(createPatient("Davos", "Seaworth",
                getDate(25, 11, 1960), Sex.MALE,
                "The Stormlands", "The Stormlands", "The Stormlands"));
        patients.add(createPatient("Ellaria", "Sand",
                getDate(15, 7, 1979), Sex.FEMALE,
                "Dorne", "Dorne", "Dorne"));


        return patients;
    }

    private Patient createPatient(String firstName, String lastName,
                                  Date dateOfBirth, Sex sex,
                                  String country, String state, String address) {
        Patient patient = new Patient(firstName, lastName);
        patient.setBirthDate(dateOfBirth);
        patient.setSex(sex);
        patient.setCountry(country);
        patient.setState(state);
        patient.setAddress(address);

        return patient;
    }

    private Date getDate(int day, int month, int year) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.DAY_OF_MONTH, day);
        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.YEAR, year);

        return calendar.getTime();

    }
}
