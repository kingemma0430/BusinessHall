import { TestBed } from '@angular/core/testing';

import { ServiceHelperService } from './service-helper.service';

describe('ServiceHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceHelperService = TestBed.get(ServiceHelperService);
    expect(service).toBeTruthy();
  });
});
