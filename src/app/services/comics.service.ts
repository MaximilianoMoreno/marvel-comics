import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { IComicsResponse } from '../models/response';
import { ComicsHTTPService } from './comics-http.service';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {


  constructor(private comicsHTTP: ComicsHTTPService) {

  }

  getComicsList(offset=0): Observable<IComicsResponse>{
    return this.comicsHTTP.getComics(offset)
      .pipe(
        flatMap(res => this.fromWire(res)),
        map( response => response)
      );
  }

  getComicsById(id: string): Observable<IComicsResponse>{
    return this.comicsHTTP.getComic(id).pipe(
      flatMap(res => this.fromWire(res)),
      map( response => response)
    );
  }

  private fromWire(comics: IComicsResponse) {

    if (!comics) {
        return EMPTY;
    }

    return of(ComicsService.processPayload(comics));

  }

  private static processPayload(payloadComic: IComicsResponse) {

    const comicPayload: IComicsResponse = payloadComic;

    let {results} = comicPayload;

    results.map( comic => {
      comic.thumbnailURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    })

    return comicPayload;

}
}
