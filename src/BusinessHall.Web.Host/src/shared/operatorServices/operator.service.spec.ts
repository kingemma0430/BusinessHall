import { TestBed } from '@angular/core/testing';

import { OperatorService } from './operator.service';

describe('OperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatorService = TestBed.get(OperatorService);
    expect(service).toBeTruthy();
  });
});
