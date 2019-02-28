import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransactionRoutingModule} from './transaction-routing.module';
import {FormTransactionComponent} from './form-transaction/form-transaction.component';
import {ScannerComponent} from './scanner/scanner.component';

import {DetailTransactionComponent} from './detail-transaction/detail-transaction.component';
import {SharedModule} from "../../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSelectModule} from "@angular/material";

@NgModule({
  declarations: [
    ScannerComponent,
    FormTransactionComponent,
    DetailTransactionComponent
  ],
  imports: [
    SharedModule,
    TransactionRoutingModule,
    MatSelectModule,

    FlexLayoutModule,
  ]
})
export class TransactionModule {
}
