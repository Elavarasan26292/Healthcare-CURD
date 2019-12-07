import { TestBed } from '@angular/core/testing';

import { HealthcareserviceService } from './healthcareservice.service';

describe('HealthcareserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthcareserviceService = TestBed.get(HealthcareserviceService);
    expect(service).toBeTruthy();
  });
});
