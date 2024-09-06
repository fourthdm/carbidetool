import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtralongseriesendmillComponent } from './extralongseriesendmill.component';

describe('ExtralongseriesendmillComponent', () => {
  let component: ExtralongseriesendmillComponent;
  let fixture: ComponentFixture<ExtralongseriesendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtralongseriesendmillComponent]
    });
    fixture = TestBed.createComponent(ExtralongseriesendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
