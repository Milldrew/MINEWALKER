import { TestBed } from '@angular/core/testing';

import { TogglersService } from './togglers.service';

describe('TogglersService', () => {
  let service: TogglersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
