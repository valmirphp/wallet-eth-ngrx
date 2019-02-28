import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelRoutingModule} from './panel-routing.module';
import {PanelStoreModule} from './store/panel-store.module';

@NgModule({
  imports: [
    CommonModule,
    PanelStoreModule,
    PanelRoutingModule
  ]
})
export class PanelModule {
}
