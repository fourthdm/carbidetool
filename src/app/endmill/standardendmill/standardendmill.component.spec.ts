import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardendmillComponent } from './standardendmill.component';

describe('StandardendmillComponent', () => {
  let component: StandardendmillComponent;
  let fixture: ComponentFixture<StandardendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardendmillComponent]
    });
    fixture = TestBed.createComponent(StandardendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
