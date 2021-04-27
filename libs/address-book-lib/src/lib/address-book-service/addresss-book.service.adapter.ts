import { Observable } from 'rxjs';

import { InjectionToken } from "@angular/core";

export abstract class AddressBookServiceAdapter {
  public abstract readonly addressBookList$: Observable<unknown>;

  public abstract getRecords(): Promise<void>;
}

export const ADDRESS_BOOK_API_CONFIGURATION = new InjectionToken<AddressBookApiConfiguration>(
  'AddressBookApiConfiguration',
);

export interface AddressBookApiConfiguration {
  addressBookListUrl: string;
  randomUserApiSeed: string;
}
