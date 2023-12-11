import { TestBed } from '@angular/core/testing';

import { PilotSurveyService } from './pilot-survey.service';

describe('PilotSurveyService', () => {
  let service: PilotSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
