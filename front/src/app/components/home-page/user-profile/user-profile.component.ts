import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  passwordTheSame: boolean = true;
  editForm:any;
  enableEditing: boolean = true;
  oldFirstName: string;
  oldSecondName: string;
  oldEmail: string;
  oldNumber: string;
  oldAddress: string;
  oldCity: string;
  oldCountry: string;
  oldPassword: string;
  oldPass: string;
  

  @Output() homePage = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
      this.oldFirstName = this.user.firstName;
      this.oldSecondName = this.user.lastName;
      this.oldEmail = this.user.email;
      this.oldNumber = this.user.mobileNumber;
      this.oldAddress = this.user.address;
      this.oldCity = this.user.city;
      this.oldCountry = this.user.country;
      this.oldPassword = this.user.password;
      this.oldPass = this.user.password;
    });

    this.editForm = new FormGroup({
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
    return this.editForm.get('firstName');
  }
  get lastName() {
    return this.editForm.get('lastName');
  }
  get email(){
    return this.editForm.get('email');
  }
  get mobileNumber(){
    return this.editForm.get('mobileNumber');
  }
  get city() {
    return this.editForm.get('city');
  }
  get country() {
    return this.editForm.get('country');
  }
  get address() {
    return this.editForm.get('address');
  }
  get password() {
    return this.editForm.get('password');
  }
  get secondPassword() {
    return this.editForm.get('secondPassword');
  }

  editUser() {
    if(this.editForm.get('password').value === this.editForm.get('secondPassword').value) {
      this.passwordTheSame = true;
      
      if(!this.isEditingEnable())
        return;
        
      this.userService.editUser(this.user).subscribe(ret => {
        if(ret) {
          if(this.user.email === 'vrbica.vlado11@gmail.com')
            this.homePage.emit('administrator');
          else
            this.homePage.emit('user');
        }
      })
    }
    else{
      this.passwordTheSame = false
    }
  }

  isEditingEnable(): Boolean {
    if(this.user.firstName == this.oldFirstName && this.user.lastName == this.oldSecondName && this.user.email == this.oldEmail 
      && this.user.address == this.oldAddress && this.user.city == this.oldCity && this.user.country == this.oldCountry 
      && this.user.password == this.oldPassword) {
        this.enableEditing = false;
        return false;
    } else{
      this.enableEditing = true;
      return true;
    }
  }

  backToHomePage() {
    if(this.user.email === 'vrbica.vlado11@gmail.com')
      this.homePage.emit('administrator');
    else
      this.homePage.emit('user');
  }
}
