import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodrufcutterComponent } from './woodrufcutter.component';

describe('WoodrufcutterComponent', () => {
  let component: WoodrufcutterComponent;
  let fixture: ComponentFixture<WoodrufcutterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoodrufcutterComponent]
    });
    fixture = TestBed.createComponent(WoodrufcutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
