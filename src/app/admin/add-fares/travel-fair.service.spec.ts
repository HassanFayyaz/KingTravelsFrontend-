import { TestBed } from '@angular/core/testing';

import { TravelFairService } from './travel-fair.service';

describe('TravelFairService', () => {
  let service: TravelFairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelFairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
