import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupplierComponent } from './create-supplier.component';

describe('CreateSupplierComponent', () => {
  let component: CreateSupplierComponent;
  let fixture: ComponentFixture<CreateSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
