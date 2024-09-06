import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepslottingComponent } from './deepslotting.component';

describe('DeepslottingComponent', () => {
  let component: DeepslottingComponent;
  let fixture: ComponentFixture<DeepslottingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepslottingComponent]
    });
    fixture = TestBed.createComponent(DeepslottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
