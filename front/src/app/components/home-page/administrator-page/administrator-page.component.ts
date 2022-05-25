import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administrator-page',
  templateUrl: './administrator-page.component.html',
  styleUrls: ['./administrator-page.component.css']
})
export class AdministratorPageComponent implements OnInit {
  user: User = new User();
  @Output() homePage = new EventEmitter<string>();
  @Output() profilePage = new EventEmitter<string>();
  @Output() usersPage = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    });
  }

  backToHome(): void {
    this.userService.removeEmail();
    this.homePage.emit();
  }

  goToProfile(): void {
    this.profilePage.emit();
  }

  showRegisteredUsers(): void {
    this.usersPage.emit();
  }
}
