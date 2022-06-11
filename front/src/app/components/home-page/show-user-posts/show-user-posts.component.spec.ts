import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserPostsComponent } from './show-user-posts.component';

describe('ShowUserPostsComponent', () => {
  let component: ShowUserPostsComponent;
  let fixture: ComponentFixture<ShowUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
