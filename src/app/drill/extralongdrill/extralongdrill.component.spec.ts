import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtralongdrillComponent } from './extralongdrill.component';

describe('ExtralongdrillComponent', () => {
  let component: ExtralongdrillComponent;
  let fixture: ComponentFixture<ExtralongdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtralongdrillComponent]
    });
    fixture = TestBed.createComponent(ExtralongdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
