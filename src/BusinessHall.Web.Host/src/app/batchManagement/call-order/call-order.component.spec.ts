import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOrderComponent } from './call-order.component';

describe('CallOrderComponent', () => {
  let component: CallOrderComponent;
  let fixture: ComponentFixture<CallOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
