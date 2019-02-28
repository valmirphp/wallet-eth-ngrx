import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormTransactionComponent} from './form-transaction/form-transaction.component';
import {DetailTransactionComponent} from './detail-transaction/detail-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: FormTransactionComponent
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
