import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from '../services/loading.service';
import { LoadingServiceStub } from '../services/loading-service-stub';
import { ComicsService } from '../services/comics.service';
import { ComicsServiceStub } from '../services/comics-service-stub';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../common/header/header.component';
import { PaginatorComponent } from '../common/paginator/paginator.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let loadingService: LoadingService;
  let comicsService: ComicsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, PaginatorComponent],
      providers: [
        {
          provide: LoadingService,
          useValue: LoadingServiceStub,
        },
        {
          provide: ComicsService,
          useValue: ComicsServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    comicsService = fixture.debugElement.injector.get(ComicsService);
    loadingService = fixture.debugElement.injector.get(LoadingService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service to retrieve comics list', () => {
    const comicsServiceSpy = spyOn(comicsService, 'getComicsList').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(comicsServiceSpy).toHaveBeenCalled();
  });

  it('should call service to retrieve on page change', () => {
    const comicsServiceSpy = spyOn(comicsService, 'getComicsList').and.callThrough();
    const loadingServiceSpy = spyOn(loadingService, 'activateOverlay').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();
    component.onPaginationChange({ pageIndex: 20, pageSize: 10 });
    fixture.detectChanges();

    expect(comicsServiceSpy).toHaveBeenCalledWith(200);
    expect(loadingServiceSpy).toHaveBeenCalled();
  });
});
