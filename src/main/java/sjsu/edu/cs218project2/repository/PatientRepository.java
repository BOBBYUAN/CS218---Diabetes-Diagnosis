package sjsu.edu.cs218project2.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import sjsu.edu.cs218project2.model.Patient;

@Repository
public class PatientRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Patient save(Patient patient) {
        dynamoDBMapper.save(patient);
        return patient;
    }

    public Patient getPatientByEmail(String email) {
        return dynamoDBMapper.load(Patient.class, email);
    }

    public String getIdByEmail(String email) {
        Patient patient = dynamoDBMapper.load(Patient.class, email);
        return patient.getPatient_id();
    }

    public String delete(String email) {
        Patient patient = dynamoDBMapper.load(Patient.class, email);
        dynamoDBMapper.delete(patient);
        return "Patient deleted";
    }

    public String update(String email, Patient patient) {
        dynamoDBMapper.save(patient,
                new DynamoDBSaveExpression()
        .withExpectedEntry("email",
                new ExpectedAttributeValue(
                        new AttributeValue().withS(email)
                )));
        return email;
    }
}
