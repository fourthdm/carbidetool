import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StependmillComponent } from './stependmill.component';

describe('StependmillComponent', () => {
  let component: StependmillComponent;
  let fixture: ComponentFixture<StependmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StependmillComponent]
    });
    fixture = TestBed.createComponent(StependmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
