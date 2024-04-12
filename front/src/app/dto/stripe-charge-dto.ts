export class StripeChargeDTO {
    stripeToken: string;
    email: string;
    amount: number;
    success: boolean;
    chargeId: string;
}
