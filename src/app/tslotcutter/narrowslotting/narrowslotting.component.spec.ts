import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowslottingComponent } from './narrowslotting.component';

describe('NarrowslottingComponent', () => {
  let component: NarrowslottingComponent;
  let fixture: ComponentFixture<NarrowslottingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrowslottingComponent]
    });
    fixture = TestBed.createComponent(NarrowslottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
