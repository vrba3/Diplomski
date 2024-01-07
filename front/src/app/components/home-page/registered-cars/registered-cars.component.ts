import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registered-cars',
  templateUrl: './registered-cars.component.html',
  styleUrls: ['./registered-cars.component.css']
})
export class RegisteredCarsComponent implements OnInit {
  showedCars: Array<Car> = new Array<Car>();

  @Output() carPage = new EventEmitter<string>();
  @Output() carProfile = new EventEmitter<string>();

  constructor(private carService: CarService, private registrationService: RegistrationService) { }

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
    
  }

  goBackToSearchPage() {
    this.carPage.emit();
  }

  openCarProfile(id: number) {
    sessionStorage.setItem('carId', id.toString())
    this.carProfile.emit();
  }

}
