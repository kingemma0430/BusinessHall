import { TestBed } from '@angular/core/testing';

import { SupplierManagerService } from './supplier-manager.service';

describe('SupplierManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierManagerService = TestBed.get(SupplierManagerService);
    expect(service).toBeTruthy();
  });
});
