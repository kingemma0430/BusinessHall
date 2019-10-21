import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierManagerComponent } from './supplier-manager.component';

describe('SupplierManagerComponent', () => {
  let component: SupplierManagerComponent;
  let fixture: ComponentFixture<SupplierManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
