import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcspotdrillComponent } from './ncspotdrill.component';

describe('NcspotdrillComponent', () => {
  let component: NcspotdrillComponent;
  let fixture: ComponentFixture<NcspotdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NcspotdrillComponent]
    });
    fixture = TestBed.createComponent(NcspotdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
