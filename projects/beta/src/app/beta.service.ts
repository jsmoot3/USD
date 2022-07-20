import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Client, CLIENT_TOKEN } from 'projects/vhap/src/public-api';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';
import { Item, Items } from './model';

@Injectable({ providedIn: 'root' })
export class BetaService {
  private readonly searchingsubject = new BehaviorSubject<boolean>(false);
  /**
   *
   */
  readonly searching$ = this.searchingsubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(
    private readonly http: HttpClient,
    @Inject(CLIENT_TOKEN) private readonly client: Client
  ) {}

  /**
   *
   * @returns
   */
  public getVersion(): Observable<string> {
    return of('1').pipe(delay(500));
  }

  /**
   *
   * @param searchTerm
   * @param count
   * @returns
   */
  public getSearchAutoSuggests(
    searchTerm: string,
    count: number
  ): Observable<Items> {
    return throwError('NOT YET IMPLEMENTED');
  }

  /**
   *
   * @param searchTerm
   * @param startIndex
   * @param count
   * @returns
   */
  getSearchResults(
    searchTerm: string,
    startIndex: number,
    count: number
  ): Observable<Items> {
    return throwError('NOT YET IMPLEMENTED');
  }

  /**
   *
   * @param intCode
   * @returns
   */
  getItem(intCode: number): Observable<Item> {
    return throwError('NOT YET IMPLEMENTED');
  }
}
