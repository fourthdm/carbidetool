import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobberdrillComponent } from './jobberdrill.component';

describe('JobberdrillComponent', () => {
  let component: JobberdrillComponent;
  let fixture: ComponentFixture<JobberdrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobberdrillComponent]
    });
    fixture = TestBed.createComponent(JobberdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
