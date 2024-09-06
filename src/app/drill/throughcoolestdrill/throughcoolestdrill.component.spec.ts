import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughcoolestdrillComponent } from './throughcoolestdrill.component';

describe('ThroughcoolestdrillComponent', () => {
  let component: ThroughcoolestdrillComponent;
  let fixture: ComponentFixture<ThroughcoolestdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThroughcoolestdrillComponent]
    });
    fixture = TestBed.createComponent(ThroughcoolestdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
