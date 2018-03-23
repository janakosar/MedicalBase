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
import java.util.Arrays;
import java.util.Date;

@SpringBootApplication
public class MedicalBaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicalBaseApplication.class, args);
	}

	// CORS
	@Bean
	FilterRegistrationBean corsFilter(
			@Value("${tagit.origin:http://localhost:4200}") String origin) {
		return new FilterRegistrationBean(new Filter() {
			public void doFilter(ServletRequest req, ServletResponse res,
								 FilterChain chain) throws IOException, ServletException {
				HttpServletRequest request = (HttpServletRequest) req;
				HttpServletResponse response = (HttpServletResponse) res;
				String method = request.getMethod();
				// this origin value could just as easily have come from a database
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
				}
				else {
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
