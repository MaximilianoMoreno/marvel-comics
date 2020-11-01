import { TestBed } from '@angular/core/testing';

import { ComicsHTTPService } from './comics-http.service';

describe('ComicsHTTPService', () => {
  let service: ComicsHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
