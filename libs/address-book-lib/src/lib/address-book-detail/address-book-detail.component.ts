import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomUserDetail } from '../address-book-service/adapters/random-user.types';
import { AddressBookService } from '../address-book-service/address-book.service';

@Component({
  selector: 'yandc-address-book-detail',
  templateUrl: './address-book-detail.component.html',
  styleUrls: ['./address-book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookDetailComponent implements OnInit {

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _AddressBookService: AddressBookService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  private _userId: string;

  public userDetail: RandomUserDetail;

  async ngOnInit(): Promise<void> {
    this._userId = this._activatedRoute.snapshot.params.userId;
    this.userDetail = await this._AddressBookService.getUserDetails(this._userId);
    this._changeDetectorRef.markForCheck();
  }

}
