import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logged-user-page',
  templateUrl: './logged-user-page.component.html',
  styleUrls: ['./logged-user-page.component.css']
})
export class LoggedUserPageComponent implements OnInit {
  user: User = new User();
  @Output() homePage = new EventEmitter<string>();

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {

    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    });
  }

  backToHome(): void {
    this.homePage.emit();
  }

}
