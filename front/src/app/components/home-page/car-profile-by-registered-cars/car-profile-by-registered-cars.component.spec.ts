import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfileByRegisteredCarsComponent } from './car-profile-by-registered-cars.component';

describe('CarProfileByRegisteredCarsComponent', () => {
  let component: CarProfileByRegisteredCarsComponent;
  let fixture: ComponentFixture<CarProfileByRegisteredCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProfileByRegisteredCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProfileByRegisteredCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
