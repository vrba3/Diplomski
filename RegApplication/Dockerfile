FROM openjdk:17-jdk-alpine
EXPOSE 8083
ADD target/regApp-0.0.1-SNAPSHOT.jar reg-service.jar
ENTRYPOINT [ "java", "-jar", "/reg-service.jar" ]