import { TestBed } from '@angular/core/testing';

import { HitMineService } from './hit-mine.service';

describe('HitMineService', () => {
  let service: HitMineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitMineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
