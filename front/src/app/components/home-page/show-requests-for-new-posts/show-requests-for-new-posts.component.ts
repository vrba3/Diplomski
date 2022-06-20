import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-show-requests-for-new-posts',
  templateUrl: './show-requests-for-new-posts.component.html',
  styleUrls: ['./show-requests-for-new-posts.component.css']
})
export class ShowRequestsForNewPostsComponent implements OnInit {
  approvedCars: any = new Array<Car>();
  notApprovedCars: any = new Array<Car>();

  @Output() adminsPage = new EventEmitter<string>();

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(ret => {
      for(let car of ret){
        if(car.approved === true)
          this.approvedCars.push(car)
        else
          this.notApprovedCars.push(car)
      }
    })
  }

  deleteCar(index: number) {
    let car = this.approvedCars[index]
    this.carService.deleteCar(car).subscribe(ret => {
      if(ret)
        this.approvedCars.splice(index, 1);
    })
  }

  acceptCar(index: number) {
    let car = this.notApprovedCars[index]
    car.approved = true;
    this.carService.editCar(car).subscribe(ret => {
      if(ret) {
        car.approved = true;
        this.notApprovedCars.splice(index, 1);
        this.approvedCars.push(car)
      }
    })
  }

  declineCar(index: number) {
    let car = this.notApprovedCars[index]
    this.carService.deleteCar(car).subscribe(ret => {
      if(ret) {
        this.notApprovedCars.splice(index, 1);
      }
    })
  }

  goBackToAdminsProfile() {
    this.adminsPage.emit('administrator');
  }
}
