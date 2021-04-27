import { async, TestBed } from '@angular/core/testing';
import { AddressBookLibModule } from './address-book-lib.module';

describe('AddressBookLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AddressBookLibModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AddressBookLibModule).toBeDefined();
  });
});
