import { TestBed } from '@angular/core/testing';

import { DeviceAssignmentService } from './device-assignment.service';

describe('DeviceAssignmentService', () => {
  let service: DeviceAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
