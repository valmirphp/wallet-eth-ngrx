import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAccount from './account/account.reducer';
import { AccountEffects } from './account/account.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('account', fromAccount.reducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class PanelStoreModule { }
