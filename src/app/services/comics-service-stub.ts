import { Observable } from 'rxjs';

import { COMIC_DETAIL, COMIC_LIST } from './mocked-data';

export const ComicsServiceStub = {
  failGetComics: false,
  failGetComicsDetails: false,

  getComicsList(): Observable<any> {
    return new Observable((observer) => {
      if (ComicsServiceStub.failGetComics === true) {
        observer.error({ status: 500, statusTest: 'Failure' });
      } else {
        observer.next(COMIC_LIST);
      }
      observer.complete();
    });
  },

  getComicsById(): Observable<any> {
    return new Observable((observer) => {
      if (ComicsServiceStub.failGetComicsDetails === true) {
        observer.error({ status: 500, statusTest: 'Failure' });
      } else {
        observer.next(COMIC_DETAIL);
      }
      observer.complete();
    });
  },
};
