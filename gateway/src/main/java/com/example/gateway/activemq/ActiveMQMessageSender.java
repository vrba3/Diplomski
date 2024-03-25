package com.example.gateway.activemq;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

@Component
public class ActiveMQMessageSender {
    private static String jmsQueue = "example_QUEUE";

    private final JmsTemplate jmsTemplate;

    public ActiveMQMessageSender(JmsTemplate jmsTemplate) {
        this.jmsTemplate = jmsTemplate;
    }

    public void sendMessage(String message){
        jmsTemplate.convertAndSend(jmsQueue, message);
    }

    public void sendObjectMessage(Object object){
        jmsTemplate.convertAndSend(jmsQueue, object);
    }
}
