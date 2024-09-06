import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapermillComponent } from './tapermill.component';

describe('TapermillComponent', () => {
  let component: TapermillComponent;
  let fixture: ComponentFixture<TapermillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapermillComponent]
    });
    fixture = TestBed.createComponent(TapermillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
