package sjsu.edu.cs218project2.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;

@DynamoDBDocument
public class Diagnose {

    @DynamoDBAttribute(attributeName = "diagnoseCase")
    private String diagnoseCase;

    @DynamoDBAttribute(attributeName = "diagnoseBloodPreasure")
    private String diagnoseBloodPreasure;

    @DynamoDBAttribute(attributeName = "diagnoseSaturation")
    private String diagnoseSaturation;

    public Diagnose() {

    }

    public Diagnose(String diagnoseCase, String diagnoseBloodPreasure, String diagnoseSaturation) {
        this.diagnoseCase = diagnoseCase;
        this.diagnoseBloodPreasure = diagnoseBloodPreasure;
        this.diagnoseSaturation = diagnoseSaturation;
    }

    public String getDiagnoseCase() {
        return diagnoseCase;
    }

    public void setDiagnoseCase(String diagnoseCase) {
        this.diagnoseCase = diagnoseCase;
    }

    public String getDiagnoseBloodPreasure() {
        return diagnoseBloodPreasure;
    }

    public void setDiagnoseBloodPreasure(String diagnoseBloodPreasure) {
        this.diagnoseBloodPreasure = diagnoseBloodPreasure;
    }

    public String getDiagnoseSaturation() {
        return diagnoseSaturation;
    }

    public void setDiagnoseSaturation(String diagnoseSaturation) {
        this.diagnoseSaturation = diagnoseSaturation;
    }
}
