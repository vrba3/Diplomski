import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserPageComponent } from './logged-user-page.component';

describe('LoggedUserPageComponent', () => {
  let component: LoggedUserPageComponent;
  let fixture: ComponentFixture<LoggedUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
