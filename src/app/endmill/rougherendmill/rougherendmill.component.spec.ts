import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RougherendmillComponent } from './rougherendmill.component';

describe('RougherendmillComponent', () => {
  let component: RougherendmillComponent;
  let fixture: ComponentFixture<RougherendmillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RougherendmillComponent]
    });
    fixture = TestBed.createComponent(RougherendmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
