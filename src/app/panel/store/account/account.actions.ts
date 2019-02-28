import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Account} from './account.model';

export enum AccountActionTypes {
  RequestAccounts = '[Account] Request Accounts',
  LoadAccounts = '[Account] Load Accounts',
  AddAccount = '[Account] Add Account',
  UpsertAccount = '[Account] Upsert Account',
  AddAccounts = '[Account] Add Accounts',
  UpsertAccounts = '[Account] Upsert Accounts',
  UpdateAccount = '[Account] Update Account',
  UpdateAccounts = '[Account] Update Accounts',
  DeleteAccount = '[Account] Delete Account',
  DeleteAccounts = '[Account] Delete Accounts',
  ClearAccounts = '[Account] Clear Accounts'
}

export class RequestAccounts implements Action {
  readonly type = AccountActionTypes.RequestAccounts;
}

export class LoadAccounts implements Action {
  readonly type = AccountActionTypes.LoadAccounts;

  constructor(public payload: { accounts: Account[] }) {
  }
}

export class AddAccount implements Action {
  readonly type = AccountActionTypes.AddAccount;

  constructor(public payload: { account: Account }) {
  }
}

export class UpsertAccount implements Action {
  readonly type = AccountActionTypes.UpsertAccount;

  constructor(public payload: { account: Account }) {
  }
}

export class AddAccounts implements Action {
  readonly type = AccountActionTypes.AddAccounts;

  constructor(public payload: { accounts: Account[] }) {
  }
}

export class UpsertAccounts implements Action {
  readonly type = AccountActionTypes.UpsertAccounts;

  constructor(public payload: { accounts: Account[] }) {
  }
}

export class UpdateAccount implements Action {
  readonly type = AccountActionTypes.UpdateAccount;

  constructor(public payload: { account: Update<Account> }) {
  }
}

export class UpdateAccounts implements Action {
  readonly type = AccountActionTypes.UpdateAccounts;

  constructor(public payload: { accounts: Update<Account>[] }) {
  }
}

export class DeleteAccount implements Action {
  readonly type = AccountActionTypes.DeleteAccount;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteAccounts implements Action {
  readonly type = AccountActionTypes.DeleteAccounts;

  constructor(public payload: { ids: string[] }) {
  }
}

export class ClearAccounts implements Action {
  readonly type = AccountActionTypes.ClearAccounts;
}

export type AccountActions =
  RequestAccounts
  | LoadAccounts
  | AddAccount
  | UpsertAccount
  | AddAccounts
  | UpsertAccounts
  | UpdateAccount
  | UpdateAccounts
  | DeleteAccount
  | DeleteAccounts
  | ClearAccounts;
