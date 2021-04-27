import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddressBookListComponent } from './address-book-list/address-book-list.component';
import { AddressBookDetailComponent } from './address-book-detail/address-book-detail.component';
import { AddressBookService } from './address-book-service/address-book.service';
import { ADDRESS_BOOK_API_CONFIGURATION } from './address-book-service/addresss-book.service.adapter';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'list', pathMatch: 'full', component: AddressBookListComponent},
      {path: 'detail/:userId', pathMatch: 'full', component: AddressBookDetailComponent},
      {path: '**', redirectTo: 'list', pathMatch: 'full'},
    ]),
  ],
  declarations: [
    AddressBookListComponent,
    AddressBookDetailComponent
  ],
  exports: [
    AddressBookListComponent
  ],
})
export class AddressBookLibModule {
  public static forRoot(configuration): ModuleWithProviders<AddressBookLibModule> {

    return {
        ngModule: AddressBookLibModule,
        providers: [
            AddressBookService,
            {
                provide: ADDRESS_BOOK_API_CONFIGURATION, // you can also use InjectionToken
                useValue: configuration
            }
        ]
    };
}
}
