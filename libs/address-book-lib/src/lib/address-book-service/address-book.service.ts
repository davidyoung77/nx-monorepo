import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUserAdapter } from './adapters/random-user.adapter';
import { RandomUserDetail } from './adapters/random-user.types';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService  {

  constructor(
    private _http: HttpClient,
    private _adapter: RandomUserAdapter,
  ) {}

  public get addressBookList$() {
    return this._adapter.addressBookList$;
  }

  public async getRecords(): Promise<void> {
    return await this._adapter.getRecords();
  }

  public getUserDetails(userId: string): Promise<RandomUserDetail> {
    return this._adapter.getUserDetails(userId);
  }
}
