import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: User = new User();
  passwordTheSame: boolean = true;
  userExists: boolean = false;
  registerForm:any;

  @Output() loggedUserPage = new EventEmitter<string>();
  @Output() homePage = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required,Validators.pattern('[A-ZŠĐČĆŽ]{1}[a-zšđčćž]+')]),
      "lastName": new FormControl(null, [Validators.required,Validators.pattern('[A-ZŠĐČĆŽ]{1}[a-zšđčćž]+')]),
      "email": new FormControl(null, [Validators.required,Validators.email]),
      "mobileNumber": new FormControl(null, [Validators.required,Validators.pattern('[0-9]{6,10}')]),
      "country": new FormControl(null, [Validators.required,Validators.pattern('[A-ZŠĐČĆŽ]{1}[a-zšđčćž]+( [A-ZŠĐČĆŽa-zšđčćž]{1}[a-zšđčćž]*)*')]),
      "city": new FormControl(null, [Validators.required,Validators.pattern('[A-ZŠĐČĆŽ]{1}[a-zšđčćž]+( [A-ZŠĐČĆŽa-zšđčćž]{1}[a-zšđčćž]*)*')]),
      "address": new FormControl(null, [Validators.required,Validators.pattern('([A-ZŠĐČĆŽ]{1}[a-zšđčćž]+ )+[0-9]+')]),
      "password": new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
      "secondPassword": new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z0-9]*')])
    });
  }


  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get mobileNumber(){
    return this.registerForm.get('mobileNumber');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get address() {
    return this.registerForm.get('address');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get secondPassword() {
    return this.registerForm.get('secondPassword');
  }

  addNewUser() {
    if(this.registerForm.get('password').value === this.registerForm.get('secondPassword').value) {
      this.passwordTheSame = true;
      this.userService.registerUser(this.user).subscribe(ret => {
        this.userExists = false;
        this.userService.setEmail(this.user.email);
        this.loggedUserPage.emit();
      }, error => {
        this.userExists = true;
      })
   }
   else{
     this.passwordTheSame = false;
     return;
   }
  }

  backToHomePage(): void{
    this.homePage.emit();
  }
}
