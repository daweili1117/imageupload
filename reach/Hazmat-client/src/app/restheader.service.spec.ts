import { TestBed } from '@angular/core/testing';

import { RestheaderService } from './restheader.service';

describe('RestheaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestheaderService = TestBed.get(RestheaderService);
    expect(service).toBeTruthy();
  });
});
