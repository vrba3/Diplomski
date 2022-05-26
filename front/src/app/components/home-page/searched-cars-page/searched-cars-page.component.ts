import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-searched-cars-page',
  templateUrl: './searched-cars-page.component.html',
  styleUrls: ['./searched-cars-page.component.css']
})
export class SearchedCarsPageComponent implements OnInit {
  allCars: any;
  
  @Output() homePage = new EventEmitter<string>();

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(ret => {
      this.allCars = ret;
    })
  }

  goBackToHomePage() {
    this.homePage.emit();
  }

  openCarProfile(text: number) {
    alert(text)
  }
}
