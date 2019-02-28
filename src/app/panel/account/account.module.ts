import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {ListAccountComponent} from './list-account/list-account.component';
import {FormAccountComponent} from './form-account/form-account.component';
import {DetailAccountComponent} from './detail-account/detail-account.component';
import {ShareAccountComponent} from './share-account/share-account.component';

@NgModule({
  declarations: [
    ListAccountComponent,
    FormAccountComponent,
    DetailAccountComponent,
    ShareAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
