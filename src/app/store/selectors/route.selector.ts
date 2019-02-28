import {createFeatureSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from '../reducers/route.reducer';

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
