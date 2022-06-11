import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-user-posts',
  templateUrl: './show-user-posts.component.html',
  styleUrls: ['./show-user-posts.component.css']
})
export class ShowUserPostsComponent implements OnInit {
  cars: any;
  user: User;

  @Output() homePage = new EventEmitter<string>();
  @Output() carProfile = new EventEmitter<string>();

  constructor(private carService: CarService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    })
    this.carService.getUserCars().subscribe(ret => {
      this.cars = ret;
    })
  }


  goBackToHomePage() {
    if(this.user.email === 'vrbica.vlado11@gmail.com')
      this.homePage.emit('administrator');
    else
      this.homePage.emit('user');
  }

  openCarProfile(id: number) {
    sessionStorage.setItem('userCarId', id.toString())
    this.carProfile.emit('');
  }
}
