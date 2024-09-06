import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusendmillComponent } from './radiusendmill.component';

describe('RadiusendmillComponent', () => {
  let component: RadiusendmillComponent;
  let fixture: ComponentFixture<RadiusendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiusendmillComponent]
    });
    fixture = TestBed.createComponent(RadiusendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
