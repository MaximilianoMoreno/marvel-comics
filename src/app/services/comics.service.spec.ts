import { TestBed } from '@angular/core/testing';
import { ComicsHTTPService } from './comics-http.service';
import { ComicsHTTPServiceStub } from './comics-http-service-stub';
import { ComicsService } from './comics.service';

describe('ComicsService', () => {
  let service: ComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComicsService,
        {
          provide: ComicsHTTPService,
          useValue: ComicsHTTPServiceStub,
        },
      ],
    });
    service = TestBed.inject(ComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
