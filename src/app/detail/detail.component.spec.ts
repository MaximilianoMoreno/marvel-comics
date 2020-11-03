import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from '../services/loading.service';
import { LoadingServiceStub } from '../services/loading-service-stub';
import { ComicsService } from '../services/comics.service';
import { ComicsServiceStub } from '../services/comics-service-stub';

import { DetailComponent } from './detail.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let loadingService: LoadingService;
  let comicsService: ComicsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        {
          provide: LoadingService,
          useValue: LoadingServiceStub,
        },
        {
          provide: ComicsService,
          useValue: ComicsServiceStub,
        },
        RouterModule,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1234' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    comicsService = fixture.debugElement.injector.get(ComicsService);
    loadingService = fixture.debugElement.injector.get(LoadingService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service to retrieve a comic by ID', () => {
    const comicsServiceSpy = spyOn(comicsService, 'getComicsById').and.callThrough();
    const loadingServiceSpy = spyOn(loadingService, 'activateOverlay').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();

    expect(comicsServiceSpy).toHaveBeenCalledWith('1234');
    expect(loadingServiceSpy).toHaveBeenCalled();
  });
});
