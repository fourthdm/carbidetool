import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallnseendmillComponent } from './ballnseendmill.component';

describe('BallnseendmillComponent', () => {
  let component: BallnseendmillComponent;
  let fixture: ComponentFixture<BallnseendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BallnseendmillComponent]
    });
    fixture = TestBed.createComponent(BallnseendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
