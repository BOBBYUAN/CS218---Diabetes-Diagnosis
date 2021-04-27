package sjsu.edu.cs218project2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sjsu.edu.cs218project2.model.Patient;
import sjsu.edu.cs218project2.repository.PatientRepository;

@RestController
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/patient")
    public Patient savePatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @GetMapping("/patient/{id}")
    public Patient getPatient(@PathVariable("id") String patientId) {
        return patientRepository.getPatientById(patientId);
    }

    @DeleteMapping("/patient/{id}")
    public String deletePatient(@PathVariable("id") String patientId) {
        return patientRepository.delete(patientId);
    }

    @PutMapping("/patient/{id}")
    public String updatePatient(@PathVariable("id") String patientId, @RequestBody Patient patient) {
        return patientRepository.update(patientId,patient);
    }
}
