import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() homePage = new EventEmitter<string>();
  @Output() loggedUserPage = new EventEmitter<string>();
  user: User;
  notFounded: boolean;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.user = new User();
    this.notFounded = false;
  }

  backToHomePage(): void{
    this.homePage.emit();
  }

  loginUser() {

    this.userService.login(this.user).subscribe( result =>  {
      if(result !== null) {
        this.notFounded = false;
        this.userService.setEmail(this.user.email);
        this.loggedUserPage.emit();
        return;
      }
      else
        this.notFounded = true;
    
    });
    this.notFounded = true;
  }
  
}
