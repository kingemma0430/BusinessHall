import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupplierPayComponent } from './create-supplier-pay.component';

describe('CreateSupplierPayComponent', () => {
  let component: CreateSupplierPayComponent;
  let fixture: ComponentFixture<CreateSupplierPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupplierPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupplierPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
