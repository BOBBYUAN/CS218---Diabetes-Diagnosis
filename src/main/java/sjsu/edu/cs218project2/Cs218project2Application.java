package sjsu.edu.cs218project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Cs218project2Application {

	public static void main(String[] args) {
		SpringApplication.run(Cs218project2Application.class, args);
	}

	@GetMapping("/")
	public String hello() {
		return "Hello From CS218 Team 3 v7";
	}

}
