import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { IComic } from '../models/comic';
import { ComicsService } from '../services/comics.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  comicId = '';
  hasError: boolean;
  comicDetail: IComic;
  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.hasError = false;
      const idKey = 'id';
      this.comicId = params[idKey];
      this.loadingService.activateOverlay('Getting Comic details');
      this.comicsService
        .getComicsById(this.comicId)
        .pipe(
          finalize(() => {
            this.loadingService.deactivateOverlay();
          })
        )
        .subscribe(
          (response) => {
            this.comicDetail = response?.results[0] || ({} as IComic);
          },
          (error) => {
            console.log(
              'Error retrieving Comic detail' +
                (error.status ? ', status: ' + error.status : '') +
                (error.statusText ? ', statusText: ' + error.statusText : '') +
                '.'
            );
            this.hasError = true;
          },
          () => {}
        );
    });
  }
}
