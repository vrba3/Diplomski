package com.example.carApp.service;

import com.example.carApp.dto.StripeChargeDTO;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StripeService {

    @Value("${api.stripe.sk}")
    private String secretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }

    public StripeChargeDTO chargePayment(StripeChargeDTO chargeRequest) throws StripeException {
        chargeRequest.setSuccess(false);
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", (int) (chargeRequest.getAmount() * 100));
        chargeParams.put("currency", "usd");
        chargeParams.put("source", chargeRequest.getStripeToken());

        Charge charge = Charge.create(chargeParams);

        if(charge.getPaid()){
            chargeRequest.setChargeId(charge.getId());
            chargeRequest.setSuccess(true);
        }

        return chargeRequest;
    }
}
