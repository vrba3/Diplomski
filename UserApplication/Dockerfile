FROM openjdk:17-jdk-alpine
EXPOSE 8081
ADD target/userApp-0.0.1-SNAPSHOT.jar user-service.jar
ENTRYPOINT [ "java", "-jar", "/user-service.jar" ]
