import { TestBed } from '@angular/core/testing';

import { AdjacentSquaresService } from './adjacent-squares.service';

describe('AdjacentSquaresService', () => {
  let service: AdjacentSquaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjacentSquaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
