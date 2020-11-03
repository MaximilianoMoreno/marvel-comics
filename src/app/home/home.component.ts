import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IComic } from '../models/comic';
import { IComicsResponse } from '../models/response';
import { ComicsService } from '../services/comics.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  comicsList: IComic[];
  response: IComicsResponse;
  currentPage = 1;
  constructor(private comicsService: ComicsService, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.getComicsList();
  }

  onPaginationChange(pagination): void {
    this.getComicsList(pagination.pageIndex * pagination.pageSize);
  }

  private getComicsList(offset = 0): void {
    this.loadingService.activateOverlay(`Getting Comics ${offset ? 'page ' + offset / 10 : 'list'}`);
    this.comicsService
      .getComicsList(offset)
      .pipe(
        finalize(() => {
          this.loadingService.deactivateOverlay();
        })
      )
      .subscribe((response) => {
        this.response = response;
        this.comicsList = response.results;
      });
  }
}
