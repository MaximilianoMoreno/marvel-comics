import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IComic } from '../models/comic';
import { IComicsResponse } from '../models/response';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  comicsList: IComic[];
  response: IComicsResponse;
  currentPage = 1;
  constructor(private comicsService: ComicsService) {}

  ngOnInit(): void {
    this.getComicsList();
  }

  onPaginationChange(pagination): void {
    this.getComicsList(pagination.pageIndex * pagination.pageSize);
  }

  private getComicsList(offset = 0): void {
    this.comicsService.getComicsList(offset).subscribe((response) => {
      this.response = response;
      this.comicsList = response.results;
    });
  }
}
