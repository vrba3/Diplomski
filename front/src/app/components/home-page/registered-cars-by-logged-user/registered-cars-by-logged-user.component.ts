import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/model/car';
import { User } from 'src/app/model/user';
import { CarService } from 'src/app/services/car.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registered-cars-by-logged-user',
  templateUrl: './registered-cars-by-logged-user.component.html',
  styleUrls: ['./registered-cars-by-logged-user.component.css']
})
export class RegisteredCarsByLoggedUserComponent implements OnInit {
  allCars: any;
  showedCars: Array<Car> = new Array<Car>();
  user: User = new User()

  @Output() carPage = new EventEmitter();
  @Output() carProfile = new EventEmitter();

  constructor(private carService: CarService, private userService: UserService, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.findByOwnersEmail().subscribe(ret => {
      if(ret.length != 0){
        for(let reg of ret){
          this.carService.getById(reg.carId).subscribe(ret => {
            if(ret.approved)
              this.showedCars.push(ret)
          })
        }
      }
    })
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    })
  }

  goBackToCarPage() {
    this.carPage.emit();
  }

  openCarProfile(id: number) {
    sessionStorage.setItem('carId', id.toString())
    this.carProfile.emit();
  }

}
