import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {ListAccountComponent} from './list-account/list-account.component';
import {FormAccountComponent} from './form-account/form-account.component';
import {DetailAccountComponent} from './detail-account/detail-account.component';
import {ShareAccountComponent} from './share-account/share-account.component';
import {MatListModule, MatTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CdkTableModule} from '@angular/cdk/table';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListAccountComponent,
    FormAccountComponent,
    DetailAccountComponent,
    ShareAccountComponent
  ],
  imports: [
    SharedModule,
    AccountRoutingModule,
    FlexLayoutModule,

    CdkTableModule,
    MatTableModule,
    MatListModule
  ]
})
export class AccountModule {
}
