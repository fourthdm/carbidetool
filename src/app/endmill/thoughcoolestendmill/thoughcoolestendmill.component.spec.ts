import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughcoolestendmillComponent } from './thoughcoolestendmill.component';

describe('ThoughcoolestendmillComponent', () => {
  let component: ThoughcoolestendmillComponent;
  let fixture: ComponentFixture<ThoughcoolestendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThoughcoolestendmillComponent]
    });
    fixture = TestBed.createComponent(ThoughcoolestendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
