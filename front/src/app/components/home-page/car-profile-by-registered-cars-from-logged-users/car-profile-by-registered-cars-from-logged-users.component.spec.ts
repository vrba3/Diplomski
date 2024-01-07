import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfileByRegisteredCarsFromLoggedUsersComponent } from './car-profile-by-registered-cars-from-logged-users.component';

describe('CarProfileByRegisteredCarsFromLoggedUsersComponent', () => {
  let component: CarProfileByRegisteredCarsFromLoggedUsersComponent;
  let fixture: ComponentFixture<CarProfileByRegisteredCarsFromLoggedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProfileByRegisteredCarsFromLoggedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProfileByRegisteredCarsFromLoggedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
