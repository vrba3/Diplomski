import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-registered-users',
  templateUrl: './all-registered-users.component.html',
  styleUrls: ['./all-registered-users.component.css']
})
export class AllRegisteredUsersComponent implements OnInit {
  allUsers: any;
  
  @Output() adminsPage = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(ret => {
      this.allUsers = ret;
    })
  }

  goBackToAdminsProfile() {
    this.adminsPage.emit('administrator');
  }

  deleteUser(index: number) {
    let deletingUser = this.allUsers[index]
    this.userService.deleteUser(deletingUser).subscribe(ret => {
      if(ret) 
        this.allUsers.splice(index, 1);
        
    });
  }
}
