import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car';
import { User } from 'src/app/model/user';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-searched-cars-for-logged-users',
  templateUrl: './searched-cars-for-logged-users.component.html',
  styleUrls: ['./searched-cars-for-logged-users.component.css']
})
export class SearchedCarsForLoggedUsersComponent implements OnInit {
  allCars: any;
  showedCars: Array<Car> = new Array<Car>();
  user: User = new User()

  @Output() homePage = new EventEmitter<string>();

  constructor(private carService: CarService, private userService: UserService) { }

  ngOnInit(): void {
    this.carService.getSearchedCars(sessionStorage.getItem('search')).subscribe(ret => {
      this.showedCars = ret;
    })
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    })
  }

  goBackToHomePage() {
    if(this.user.email === 'vrbica.vlado11@gmail.com')
      this.homePage.emit('administrator');
    else
      this.homePage.emit('user');
  }

  openCarProfile(text: number) {
    
    
  }
}
