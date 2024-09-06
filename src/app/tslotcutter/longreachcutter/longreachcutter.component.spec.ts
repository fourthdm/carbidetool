import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongreachcutterComponent } from './longreachcutter.component';

describe('LongreachcutterComponent', () => {
  let component: LongreachcutterComponent;
  let fixture: ComponentFixture<LongreachcutterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongreachcutterComponent]
    });
    fixture = TestBed.createComponent(LongreachcutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
