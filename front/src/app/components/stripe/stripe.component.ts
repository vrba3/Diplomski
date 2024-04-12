import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StripeChargeDTO } from 'src/app/dto/stripe-charge-dto';
import { User } from 'src/app/model/user';
import { StripeService } from 'src/app/services/stripe.service';
import { UserService } from 'src/app/services/user.service';

declare var Stripe: any;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  paymentHandler:any = null;
  chargeStripe: StripeChargeDTO = {} as StripeChargeDTO;
  user: User = new User()

  @Output() homePage = new EventEmitter<string>();

  constructor(private stripeService: StripeService, private userService: UserService) { }

  ngOnInit(): void {
    this.invokeStripe();
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    })
  }

  makePayment(amount: number){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OzITbH6QbhqOFzyv2Omm9Z6zRIv5ycAzkFQ781IatByuVcCGPyT4aeFMbjWxRUFPZOp8oIZMAK80kk8oTbXIZYO00c3fN5xzg',
          locale: 'auto',
          token: (stripeToken:any) => {
            this.chargeStripe = new StripeChargeDTO();
            this.chargeStripe.amount = amount
            this.chargeStripe.stripeToken = stripeToken.id
            this.chargeStripe.email = stripeToken.email
            this.sendCharge()
          }
    });

    paymentHandler.open({
      name: 'Kupi Auto',
      description: 'Car Payment',
      amount: amount * 100
    })

    
  }

  sendCharge(): void {
    this.stripeService.createPayment(this.chargeStripe).subscribe(ret => {
      if(ret.success){
        let back = document.getElementById('backBtn') as HTMLButtonElement;
        let payment = document.getElementById('paymentBtn') as HTMLButtonElement;
        back.disabled = false;
        payment.disabled = true;
      }
      else
        alert('Payment isnt finished successfully!')
    })
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')){
      const script = window.document.createElement('script');
      script.id = 'stripe-script'
      script.type = 'text/javascript'
      script.src = 'https://checkout.stripe.com/checkout.js'
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OzITbH6QbhqOFzyv2Omm9Z6zRIv5ycAzkFQ781IatByuVcCGPyT4aeFMbjWxRUFPZOp8oIZMAK80kk8oTbXIZYO00c3fN5xzg',
          locale: 'auto',
          token: function(stripeToken:any){
            console.log(stripeToken);
          }
        })
      };

      window.document.body.appendChild(script);
    }
  }

  backToHomePage() {
    if(this.user.email === 'vrbica.vlado11@gmail.com')
      this.homePage.emit('administrator');
    else
      this.homePage.emit('user');
  }
}
