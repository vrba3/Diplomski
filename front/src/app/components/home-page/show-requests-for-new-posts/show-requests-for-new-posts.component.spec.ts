import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRequestsForNewPostsComponent } from './show-requests-for-new-posts.component';

describe('ShowRequestsForNewPostsComponent', () => {
  let component: ShowRequestsForNewPostsComponent;
  let fixture: ComponentFixture<ShowRequestsForNewPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRequestsForNewPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRequestsForNewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
