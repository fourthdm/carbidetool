import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubdrillComponent } from './stubdrill.component';

describe('StubdrillComponent', () => {
  let component: StubdrillComponent;
  let fixture: ComponentFixture<StubdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StubdrillComponent]
    });
    fixture = TestBed.createComponent(StubdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
