import {AccountState, adapter} from './account.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StepAccountEnum} from './account.model';

export const getAccountState = createFeatureSelector<AccountState>('account');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getAccountState);

export const getStepAccount = createSelector(
  getAccountState,
  selectTotal,
  (state, total) => {

    if (state.isLoading) {
      return StepAccountEnum.LOADING;
    } else if (total === 0) {
      return StepAccountEnum.EMPTY;
    } else {
      return StepAccountEnum.LIST;
    }

  }
);



