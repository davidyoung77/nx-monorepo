import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AddressBookService } from '../address-book-service/address-book.service';

@Component({
  selector: 'yandc-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrls: ['./address-book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookListComponent implements OnInit {

  constructor(private _AddressBookService: AddressBookService) {
  }

  public get addressBookList$() {
    return this._AddressBookService.addressBookList$;
  }

  async ngOnInit(): Promise<void> {
    await this._AddressBookService.getRecords();
  }

}
