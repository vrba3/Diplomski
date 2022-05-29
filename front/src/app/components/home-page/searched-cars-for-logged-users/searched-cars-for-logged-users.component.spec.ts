import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCarsForLoggedUsersComponent } from './searched-cars-for-logged-users.component';

describe('SearchedCarsForLoggedUsersComponent', () => {
  let component: SearchedCarsForLoggedUsersComponent;
  let fixture: ComponentFixture<SearchedCarsForLoggedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedCarsForLoggedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedCarsForLoggedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
