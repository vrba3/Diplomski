import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/model/car';
import { Registration } from 'src/app/model/registration';
import { User } from 'src/app/model/user';
import { CarService } from 'src/app/services/car.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-profile-by-registered-cars-from-logged-users',
  templateUrl: './car-profile-by-registered-cars-from-logged-users.component.html',
  styleUrls: ['./car-profile-by-registered-cars-from-logged-users.component.css']
})
export class CarProfileByRegisteredCarsFromLoggedUsersComponent implements OnInit {

  car: Car;
  carImg: String;
  numOfImg: number;
  user: User;
  registration: Registration = {} as Registration;
  
  @Output() registeredCarsPage = new EventEmitter<string>();

  constructor(private carService: CarService, private userService: UserService, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.numOfImg = 0;
    this.carService.getOpenedCar().subscribe(ret => {
      this.car = ret;
      this.userService.getUserFromPost(this.car.ownersEmail).subscribe(ret => {
        this.user = ret;
        this.registrationService.findByCarId(this.car.id).subscribe(ret => {
          if (ret != null) 
            this.registration = ret
        })
      })
    })
  }

  backToRegisteredCarsPage() {
    this.registeredCarsPage.emit();
  }

  previousImage() {
    if(this.numOfImg === 0)
      this.numOfImg = this.car.images.length - 1
    else
      this.numOfImg = this.numOfImg - 1
  }

  nextImage() {
    if(this.car.images.length - 1 === this.numOfImg)
      this.numOfImg = 0
    else
    this.numOfImg = this.numOfImg + 1
  }

  getTransmission() {
    if(this.car.transmission === 'Manual')
      return 'Manuelni'
    else
      return 'Automatski'
  }

  getEmisionClass() {
    if(this.car.yearOfProduction <= 1997)
      return 'Euro 1'
    else if(this.car.yearOfProduction <= 2001)
      return 'Euro 2'
    else if(this.car.yearOfProduction <= 2006)
      return 'Euro 3'
    else if(this.car.yearOfProduction <= 2011)
      return 'Euro 4'
    else if(this.car.yearOfProduction <= 2015)
      return 'Euro 5'
    else
      return 'Euro 6'
  }

  getPower() {
    if(this.car.numOfKw === 25)
      return '25/34 (kW/KS)'
    else if(this.car.numOfKw === 35)
      return '35/48 (kW/KS)'
    else if(this.car.numOfKw === 44)
      return '44/60 (kW/KS)'
    else if(this.car.numOfKw === 55)
      return '55/75 (kW/KS)'
    else if(this.car.numOfKw === 66)
      return '66/90 (kW/KS)'
    else if(this.car.numOfKw === 74)
      return '74/101 (kW/KS)'
    else if(this.car.numOfKw === 80)
      return '80/109 (kW/KS)'
    else if(this.car.numOfKw === 96)
      return '96/131 (kW/KS)'
    else if(this.car.numOfKw === 110)
      return '110/150 (kW/KS)'
    else if(this.car.numOfKw === 125)
      return '125/170 (kW/KS)'
    else if(this.car.numOfKw === 147)
      return '147/200 (kW/KS)'
    else if(this.car.numOfKw === 184)
      return '184/250 (kW/KS)'
    else if(this.car.numOfKw === 222)
      return '222/302 (kW/KS)'
    else if(this.car.numOfKw === 262)
      return '262/356 (kW/KS)'
    else if(this.car.numOfKw === 294)
      return '294/402 (kW/KS)'
    else if(this.car.numOfKw === 333)
      return '333/453 (kW/KS)'
    else
      return ''
  }

  getFuel() {
    if(this.car.fuel.toLowerCase() === 'tng')
      return 'Gas'
    else if(this.car.fuel.toLowerCase() === 'gasoline')
      return 'Benzin'
    else if(this.car.fuel.toLowerCase() === 'diesel')
      return 'Dizel'
    else if(this.car.fuel.toLowerCase() === 'hybrid')
      return 'Hibridni pogon'
    else if(this.car.fuel.toLowerCase() === 'electric')
      return 'Električni pogon'
    else
      return ''
  }

}
