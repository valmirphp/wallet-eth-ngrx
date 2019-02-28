import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterState} from './counter.reducer';

export const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounterQuantity = createSelector(
  getCounterState,
  (state: CounterState) => state.quantity
);

export const getCounterClicks = createSelector(
  getCounterState,
  (state: CounterState) => state.clicks
);

