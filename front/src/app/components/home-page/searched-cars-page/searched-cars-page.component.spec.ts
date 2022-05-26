import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCarsPageComponent } from './searched-cars-page.component';

describe('SearchedCarsPageComponent', () => {
  let component: SearchedCarsPageComponent;
  let fixture: ComponentFixture<SearchedCarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedCarsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
