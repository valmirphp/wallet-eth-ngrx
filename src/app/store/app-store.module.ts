import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {rootReducers, appMetaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NavigationActionTiming, StoreRouterConnectingModule} from '@ngrx/router-store';

import {rootEffects} from './effects';
import {environment} from '../../environments/environment';
import {CustomSerializer} from './reducers/route.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducers, {metaReducers: appMetaReducers}),
    EffectsModule.forRoot(rootEffects),
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
