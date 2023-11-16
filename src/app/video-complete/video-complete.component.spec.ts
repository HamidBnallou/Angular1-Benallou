import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCompleteComponent } from './video-complete.component';

describe('VideoCompleteComponent', () => {
  let component: VideoCompleteComponent;
  let fixture: ComponentFixture<VideoCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCompleteComponent]
    });
    fixture = TestBed.createComponent(VideoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
