import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { BackgroundDirective } from './directives/background.directive';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    LayoutComponent,
    BackgroundDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class ShellModule {
}
