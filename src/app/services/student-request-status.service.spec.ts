import { TestBed } from '@angular/core/testing';

import { StudentRequestStatusService } from './student-request-status.service';

describe('StudentRequestStatusService', () => {
  let service: StudentRequestStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRequestStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
