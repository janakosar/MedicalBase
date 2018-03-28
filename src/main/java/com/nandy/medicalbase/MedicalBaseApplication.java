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

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.DAY_OF_MONTH, 19);
        calendar.set(Calendar.MONTH, 4);
        calendar.set(Calendar.YEAR, 1995);

        List<Patient> patients = new ArrayList<>();

        Patient p = new Patient("John", "Snow");
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setState("Colorado");
        p.setAddress("Colorado Street");
        p.setSex(Sex.MALE);
        patients.add(p);

        p = new Patient("Jesica", "Li");
        calendar.set(Calendar.DAY_OF_MONTH, 17);
        calendar.set(Calendar.MONTH, 10);
        calendar.set(Calendar.YEAR, 1990);
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setState("IL");
        p.setSex(Sex.FEMALE);
        p.setAddress("Chicago");
        patients.add(p);

        p = new Patient("Leo", "Tiger");
        calendar.set(Calendar.DAY_OF_MONTH, 22);
        calendar.set(Calendar.MONTH, 8);
        calendar.set(Calendar.YEAR, 1999);
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setSex(Sex.MALE);
        p.setState("Dakota");
        p.setAddress("South Dakota");
        patients.add(p);

        p = new Patient("Max", "Tomson");
        calendar.set(Calendar.DAY_OF_MONTH, 6);
        calendar.set(Calendar.MONTH, 6);
        calendar.set(Calendar.YEAR, 1992);
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setState("IL");
        p.setAddress("Wermunt");
        p.setSex(Sex.MALE);
        patients.add(p);

        p = new Patient("Emmy", "Whitehouse");
        calendar.set(Calendar.DAY_OF_MONTH, 11);
        calendar.set(Calendar.MONTH, 9);
        calendar.set(Calendar.YEAR, 1996);
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setSex(Sex.FEMALE);
        p.setState("IL");
        p.setAddress("Denver");
        patients.add(p);

        p = new Patient("Dilan", "Simon");
        calendar.set(Calendar.DAY_OF_MONTH, 25);
        calendar.set(Calendar.MONTH, 11);
        calendar.set(Calendar.YEAR, 1988);
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setState("LA");
        p.setAddress("Las-Vegas");
        p.setSex(Sex.MALE);
        patients.add(p);

        p = new Patient("Sophie", "Green");
        calendar.set(Calendar.DAY_OF_MONTH, 15);
        calendar.set(Calendar.MONTH, 7);
        calendar.set(Calendar.YEAR, 1993);
        p.setBirthDate(calendar.getTime());
        p.setCountry("USA");
        p.setSex(Sex.FEMALE);
        p.setState("Wasinghton");
        p.setAddress("NY");
        patients.add(p);


        return (evt) -> patients
                .forEach(
                        pa -> {
                            Patient patient = patientRepository.save(pa);
                            Comment c1 = new Comment(patient, "It is first comment of " + patient.getFirstName() + " " + patient.getLastName(), new Date());

                            Comment c2 = new Comment(patient, "It is another comment of " + patient.getFirstName() + " " + patient.getLastName(), new Date());

                            Comment created = commentRepository.save(c1);
                             commentRepository.save(c2);

                            created.setText("Edited");
                            commentRepository.save(created);
                        });
    }
}
