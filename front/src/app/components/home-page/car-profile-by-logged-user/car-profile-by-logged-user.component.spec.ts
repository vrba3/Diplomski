import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfileByLoggedUserComponent } from './car-profile-by-logged-user.component';

describe('CarProfileByLoggedUserComponent', () => {
  let component: CarProfileByLoggedUserComponent;
  let fixture: ComponentFixture<CarProfileByLoggedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProfileByLoggedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProfileByLoggedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
