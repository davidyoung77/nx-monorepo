/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import { Mock } from '@testing-library/angular/jest-utils';
import { RandomUserAdapter } from './random-user.adapter';
import { RandomUserResponseMock } from './random-user-response.mock';
import { ADDRESS_BOOK_API_CONFIGURATION } from '../addresss-book.service.adapter';


describe('RandomUserAdapter', () => {
  beforeEach(async () => {
    let randomUserAdapter: RandomUserAdapter;
    let addressBookApiConfigurationMock: Mock<typeof ADDRESS_BOOK_API_CONFIGURATION>;

    TestBed.configureTestingModule({
      providers: [
        RandomUserAdapter,
        { provide: ADDRESS_BOOK_API_CONFIGURATION, useValue: addressBookApiConfigurationMock},
      ],
    }).compileComponents();

    randomUserAdapter = TestBed.inject(RandomUserAdapter);
  });

  it('should create', () => {
    expect(randomUserAdapter).toBeTruthy();
  });

  it('should get the details of a single user', () => {
    const userDetails = randomUserAdapter.getUserDetails('NaNNA146undefined');

    expect(userDetails.email).toBe('julia.neva@example.com');
  });
});
