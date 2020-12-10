import { TestBed } from '@angular/core/testing';

import { HeatIndexService } from './heat-index.service';

describe('HeatIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeatIndexService = TestBed.get(HeatIndexService);
    expect(service).toBeTruthy();
  });
});
