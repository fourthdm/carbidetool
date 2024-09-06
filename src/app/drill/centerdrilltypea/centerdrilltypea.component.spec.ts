import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdrilltypeaComponent } from './centerdrilltypea.component';

describe('CenterdrilltypeaComponent', () => {
  let component: CenterdrilltypeaComponent;
  let fixture: ComponentFixture<CenterdrilltypeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterdrilltypeaComponent]
    });
    fixture = TestBed.createComponent(CenterdrilltypeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
