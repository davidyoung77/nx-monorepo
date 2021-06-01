import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@demo/authentication';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
