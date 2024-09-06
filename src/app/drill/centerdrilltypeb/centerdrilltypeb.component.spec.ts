import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdrilltypebComponent } from './centerdrilltypeb.component';

describe('CenterdrilltypebComponent', () => {
  let component: CenterdrilltypebComponent;
  let fixture: ComponentFixture<CenterdrilltypebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterdrilltypebComponent]
    });
    fixture = TestBed.createComponent(CenterdrilltypebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
