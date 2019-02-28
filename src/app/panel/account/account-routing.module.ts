import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListAccountComponent} from './list-account/list-account.component';
import {FormAccountComponent} from './form-account/form-account.component';
import {DetailAccountComponent} from './detail-account/detail-account.component';
import {ShareAccountComponent} from './share-account/share-account.component';

const routes: Routes = [
  {
    path: 'create',
    component: FormAccountComponent
  },
  {
    path: ':hash/view',
    component: DetailAccountComponent
  },
  {
    path: ':hash/share',
    component: ShareAccountComponent
  },
  {
    path: '',
    component: ListAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
