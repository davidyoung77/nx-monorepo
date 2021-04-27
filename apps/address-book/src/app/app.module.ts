import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddressBookLibModule } from '@yandc/address-book-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AddressBookLibModule.forRoot({
      addressBookListUrl: environment.randomUserApiUrl,
      randomUserApiSeed: environment.randomUserApiSeed,
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
