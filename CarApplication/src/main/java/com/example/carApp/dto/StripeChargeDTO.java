package com.example.carApp.dto;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Data
public class StripeChargeDTO {
    private String stripeToken;
    private String email;
    private Double amount;
    private Boolean success;
    private String chargeId;
}
