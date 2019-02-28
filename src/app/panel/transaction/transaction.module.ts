import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransactionRoutingModule} from './transaction-routing.module';
import {FormTransactionComponent} from './form-transaction/form-transaction.component';
import {ConfirmTransactionComponent} from './confirm-transaction/confirm-transaction.component';
import {ScannerComponent} from './scanner/scanner.component';

import {DetailTransactionComponent} from './detail-transaction/detail-transaction.component';

@NgModule({
  declarations: [
    ScannerComponent,
    FormTransactionComponent,
    ConfirmTransactionComponent,
    DetailTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule {
}
