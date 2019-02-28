import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NavigationActionTiming, StoreRouterConnectingModule} from '@ngrx/router-store';

import {environment} from '../../environments/environment';
import {CustomSerializer} from './router/route.reducer';
import {rootMetaReducers, rootReducers} from './root.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducers, {metaReducers: rootMetaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AppStoreModule {
}
