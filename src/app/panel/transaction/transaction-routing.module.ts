import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormTransactionComponent} from './form-transaction/form-transaction.component';
import {ConfirmTransactionComponent} from './confirm-transaction/confirm-transaction.component';
import {DetailTransactionComponent} from './detail-transaction/detail-transaction.component';

const routes: Routes = [
  {
    path: 'create',
    component: FormTransactionComponent
  },
  {
    path: 'confirm',
    component: ConfirmTransactionComponent
  },
  {
    path: ':txid/finish',
    component: DetailTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {
}
