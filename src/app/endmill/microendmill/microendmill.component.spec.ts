import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroendmillComponent } from './microendmill.component';

describe('MicroendmillComponent', () => {
  let component: MicroendmillComponent;
  let fixture: ComponentFixture<MicroendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroendmillComponent]
    });
    fixture = TestBed.createComponent(MicroendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
