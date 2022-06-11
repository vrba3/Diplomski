import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-searched-cars-page',
  templateUrl: './searched-cars-page.component.html',
  styleUrls: ['./searched-cars-page.component.css']
})
export class SearchedCarsPageComponent implements OnInit {
  allCars: any;
  showedCars: Array<Car> = new Array<Car>();

  @Output() homePage = new EventEmitter<string>();
  @Output() carProfile = new EventEmitter<string>();

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getSearchedCars(sessionStorage.getItem('search')).subscribe(ret => {
      this.showedCars = ret;
    })
    this.carService.getAllCars().subscribe(ret => {
      this.allCars = ret;
    })
    
  }

  goBackToHomePage() {
    this.homePage.emit();
  }

  openCarProfile(id: number) {
    sessionStorage.setItem('carId', id.toString())
    this.carProfile.emit('');
  }
}
