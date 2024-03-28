FROM openjdk:17-jdk-alpine
EXPOSE 8080
ADD target/gateway-0.0.1-SNAPSHOT.jar gateway-service.jar
ENTRYPOINT [ "java", "-jar", "/gateway-service.jar" ]