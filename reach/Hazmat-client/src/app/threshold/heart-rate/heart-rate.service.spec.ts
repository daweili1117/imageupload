import { TestBed } from '@angular/core/testing';

import { HeartRateService } from './heart-rate.service';

describe('HeartRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeartRateService = TestBed.get(HeartRateService);
    expect(service).toBeTruthy();
  });
});
