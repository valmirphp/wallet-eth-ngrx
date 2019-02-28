import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import {AppState} from './app.reducer';
import {counterReducer, CounterState} from './counter.reducer';
import {environment} from '../../../environments/environment';
import {RouterStateUrl} from './route.reducer';

export * from './app.reducer';
export * from './counter.reducer';

export interface RootState {
  router: RouterReducerState<RouterStateUrl>;
  counter: CounterState;
}

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  counter: counterReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
