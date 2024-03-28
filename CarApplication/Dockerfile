FROM openjdk:17-jdk-alpine
EXPOSE 8082
ADD target/carApp-0.0.1-SNAPSHOT.jar car-service.jar
ENTRYPOINT [ "java", "-jar", "/car-service.jar" ]