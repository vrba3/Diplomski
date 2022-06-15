import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfileBySearchedCarsFromLoggedUsersComponent } from './car-profile-by-searched-cars-from-logged-users.component';

describe('CarProfileBySearchedCarsFromLoggedUsersComponent', () => {
  let component: CarProfileBySearchedCarsFromLoggedUsersComponent;
  let fixture: ComponentFixture<CarProfileBySearchedCarsFromLoggedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProfileBySearchedCarsFromLoggedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProfileBySearchedCarsFromLoggedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
