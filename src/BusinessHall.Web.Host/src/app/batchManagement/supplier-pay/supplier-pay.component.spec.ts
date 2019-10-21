import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPayComponent } from './supplier-pay.component';

describe('SupplierPayComponent', () => {
  let component: SupplierPayComponent;
  let fixture: ComponentFixture<SupplierPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
