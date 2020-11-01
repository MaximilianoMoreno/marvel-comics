import { IComic } from './comic';

export interface IComicsResponse {
  offset: number,
  limit: number,
  total: number,
  count: number,
  results: [
    IComic
  ]
}
