import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../shell/layout/layout.component';
import {ShellModule} from '../shell/shell.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'accounts',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: '',
        redirectTo: 'accounts',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [
    ShellModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule {
}
