import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IComic } from '../models/comic';
import { IComicsResponse } from '../models/response';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsHTTPService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private HASH = 'b9684948fe5316cfef2e74ff0ff98e88';
  private API_KEY = '7cc3eb04ddde3d5908c75598f694ef48';
  private comicsUrl = `https://gateway.marvel.com:443/v1/public/comics?limit=10&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`;  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET comics from the server */
  getComics(offset = 0): Observable <IComicsResponse > {
    return this.http.get(`${this.comicsUrl}&offset=${offset}`)
      .pipe(
        map( (response: {data: IComicsResponse})  => response.data as IComicsResponse ),
        tap(_ => this.log(`fetched comicsList`)),
        catchError(this.handleError<IComicsResponse>(`getComics List`))
      );

  }

  /** GET comic by id. Will 404 if id not found */
  getComic(id: string): Observable<IComicsResponse> {
    const url = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`;  // URL to web api`;
    return this.http.get(url)
      .pipe(
        map( (response: {data: IComicsResponse})  => response.data as IComicsResponse ),
        tap(_ => this.log(`fetched comic id=${id}`)),
        catchError(this.handleError<IComicsResponse>(`getComic id=${id}`))
      );
   }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}
