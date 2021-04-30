package sjsu.edu.cs218project2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sjsu.edu.cs218project2.model.Patient;
import sjsu.edu.cs218project2.repository.PatientRepository;

@RestController
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/patient")
    public Patient savePatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/patient/{email}")
    public Patient getPatient(@PathVariable("email") String email) {
        return patientRepository.getPatientByEmail(email);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/patient/{email}")
    public String deletePatient(@PathVariable("email") String email) {
        return patientRepository.delete(email);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/patient/{email}")
    public String updatePatient(@PathVariable("email") String email, @RequestBody Patient patient) {
        return patientRepository.update(email,patient);
    }
}
