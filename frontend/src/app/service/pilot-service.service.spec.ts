import { TestBed } from '@angular/core/testing';

import { PilotServiceService } from './pilot-service.service';

describe('PilotServiceService', () => {
  let service: PilotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
