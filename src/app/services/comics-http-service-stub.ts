import { Observable } from 'rxjs';
import { IComicsResponse } from '../models/response';
import { COMIC_DETAIL, COMIC_LIST } from './mocked-data';

export const ComicsHTTPServiceStub = {
  getComics(offset = 0): Observable<any> {
    return new Observable((observer) => {
      observer.next(COMIC_LIST);
      observer.complete();
    });
  },
  getComic(id: string): Observable<any> {
    return new Observable((observer) => {
      observer.next(COMIC_DETAIL);
      observer.complete();
    });
  },
};
