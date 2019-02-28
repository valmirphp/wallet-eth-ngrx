import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Account, AccountState, getStepAccount, RequestAccounts, StepAccountEnum, selectAll} from '../../store/account';

@Component({
  selector: 'we-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {

  public step$: Observable<StepAccountEnum>;
  public accounts$: Observable<Account[]>;

  constructor(private store: Store<AccountState>) {
    this.step$ = this.store.pipe(select(getStepAccount));
    this.accounts$ = this.store.pipe(select(selectAll));
  }

  ngOnInit() {
    this.store.dispatch(new RequestAccounts());
  }

}
