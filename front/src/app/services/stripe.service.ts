import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StripeChargeDTO } from '../dto/stripe-charge-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private createPaymentUrl: string;

  constructor(private http: HttpClient) { 
    this.createPaymentUrl = 'http://localhost:8082/stripe/charge'
  }

  public createPayment(stripeCharge:StripeChargeDTO):Observable<StripeChargeDTO>{
    return this.http.post<StripeChargeDTO>(this.createPaymentUrl,stripeCharge);
  }
  
}
