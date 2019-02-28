import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {ListAccountComponent} from './list-account/list-account.component';
import {FormAccountComponent} from './form-account/form-account.component';
import {DetailAccountComponent} from './detail-account/detail-account.component';
import {ShareAccountComponent} from './share-account/share-account.component';
import {MatButtonModule, MatIconModule, MatListModule, MatTableModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CdkTableModule} from "@angular/cdk/table";

@NgModule({
  declarations: [
    ListAccountComponent,
    FormAccountComponent,
    DetailAccountComponent,
    ShareAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FlexLayoutModule,

    MatButtonModule,
    MatIconModule,

    MatTableModule,
    CdkTableModule,

    MatListModule
  ]
})
export class AccountModule {
}
