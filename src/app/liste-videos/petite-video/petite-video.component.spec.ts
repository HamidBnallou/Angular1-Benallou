import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteVideoComponent } from './petite-video.component';

describe('PetiteVideoComponent', () => {
  let component: PetiteVideoComponent;
  let fixture: ComponentFixture<PetiteVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetiteVideoComponent]
    });
    fixture = TestBed.createComponent(PetiteVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
