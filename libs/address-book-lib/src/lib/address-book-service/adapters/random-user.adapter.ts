import { RandomUserDetail, RandomUserResponseSchema } from './random-user.types';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddressBookServiceAdapter, ADDRESS_BOOK_API_CONFIGURATION } from '../addresss-book.service.adapter';

@Injectable({
  providedIn: 'root'
})
export class RandomUserAdapter implements AddressBookServiceAdapter {
  public addressBookList$: Observable<RandomUserDetail[]>;

  public constructor(
    private _http: HttpClient,
    @Inject(ADDRESS_BOOK_API_CONFIGURATION) private _environment,
  ) {
    this.addressBookList$ = this._addressBookList$.asObservable();
  }

  private _url = `${this._environment.addressBookListUrl}?seed=${this._environment.randomUserApiSeed}&results=100`;
  private _addressBookList$ = new BehaviorSubject<RandomUserDetail[]>([]);

  public async getRecords() {
    const response = await this._http.get<RandomUserResponseSchema>(this._url).toPromise();

    this._addressBookList$.next(response.results);
  }

  public async getUserDetails(userId: string): Promise<RandomUserDetail> {
    if (!this._addressBookList$.value.length) {
      await this.getRecords();
    }

    return this._addressBookList$.value.find(user => user.id.value === userId);
  }
}
