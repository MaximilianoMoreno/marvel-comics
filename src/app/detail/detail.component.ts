import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IComic } from '../models/comic';
import { ComicsService } from '../services/comics.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  comicId = '';
  comicDetail: IComic;
  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comicId = params['id'];
      this.comicsService.getComicsById(this.comicId)
        .subscribe(response => {
          this.comicDetail = response.results[0];
        }
      );
    });
  }



}
