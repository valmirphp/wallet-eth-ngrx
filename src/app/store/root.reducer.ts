import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {counterReducer, CounterState} from './counter/counter.reducer';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {RouterStateUrl} from './router/route.reducer';
import {environment} from '../../environments/environment';

export interface RootState {
  router: RouterReducerState<RouterStateUrl>;
  counter: CounterState;
}

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  counter: counterReducer
};

export const rootMetaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
