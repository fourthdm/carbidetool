import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrightfluteComponent } from './strightflute.component';

describe('StrightfluteComponent', () => {
  let component: StrightfluteComponent;
  let fixture: ComponentFixture<StrightfluteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrightfluteComponent]
    });
    fixture = TestBed.createComponent(StrightfluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
