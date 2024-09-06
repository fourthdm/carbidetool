import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnishingdrillComponent } from './burnishingdrill.component';

describe('BurnishingdrillComponent', () => {
  let component: BurnishingdrillComponent;
  let fixture: ComponentFixture<BurnishingdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurnishingdrillComponent]
    });
    fixture = TestBed.createComponent(BurnishingdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
