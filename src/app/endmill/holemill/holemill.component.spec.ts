import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolemillComponent } from './holemill.component';

describe('HolemillComponent', () => {
  let component: HolemillComponent;
  let fixture: ComponentFixture<HolemillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolemillComponent]
    });
    fixture = TestBed.createComponent(HolemillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
