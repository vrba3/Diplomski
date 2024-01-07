import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCarsByLoggedUserComponent } from './registered-cars-by-logged-user.component';

describe('RegisteredCarsByLoggedUserComponent', () => {
  let component: RegisteredCarsByLoggedUserComponent;
  let fixture: ComponentFixture<RegisteredCarsByLoggedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCarsByLoggedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCarsByLoggedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
