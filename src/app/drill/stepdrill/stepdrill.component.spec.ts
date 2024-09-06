import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepdrillComponent } from './stepdrill.component';

describe('StepdrillComponent', () => {
  let component: StepdrillComponent;
  let fixture: ComponentFixture<StepdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepdrillComponent]
    });
    fixture = TestBed.createComponent(StepdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
