import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Account} from './account.model';
import {AccountActions, AccountActionTypes} from './account.actions';

export interface AccountState extends EntityState<Account> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>({
  selectId: model => model.hash
});

export const initialState: AccountState = adapter.getInitialState({
  isLoading: false
});

export function reducer(
  state = initialState,
  action: AccountActions
): AccountState {
  switch (action.type) {
    case AccountActionTypes.RequestAccounts: {
      return {...state, isLoading: true};
    }

    case AccountActionTypes.AddAccount: {
      return adapter.addOne(action.payload.account, state);
    }

    case AccountActionTypes.UpsertAccount: {
      return adapter.upsertOne(action.payload.account, state);
    }

    case AccountActionTypes.AddAccounts: {
      return adapter.addMany(action.payload.accounts, state);
    }

    case AccountActionTypes.UpsertAccounts: {
      return adapter.upsertMany(action.payload.accounts, state);
    }

    case AccountActionTypes.UpdateAccount: {
      return adapter.updateOne(action.payload.account, state);
    }

    case AccountActionTypes.UpdateAccounts: {
      return adapter.updateMany(action.payload.accounts, state);
    }

    case AccountActionTypes.DeleteAccount: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AccountActionTypes.DeleteAccounts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AccountActionTypes.LoadAccounts: {
      return {...adapter.addAll(action.payload.accounts, state), isLoading: false};
    }

    case AccountActionTypes.ClearAccounts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
