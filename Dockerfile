FROM openjdk:11
EXPOSE 8080
COPY target/cs218project2-0.0.1-SNAPSHOT.jar cs218project2-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/cs218project2-0.0.1-SNAPSHOT.jar"]