import {Component, OnInit} from '@angular/core';
import {AccountModel} from "../../../shared/models/account.model";
import {TransactionModel} from "../../../shared/models/transaction.model";

@Component({
  selector: 'we-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {
  displayedColumns = ['date', 'from', 'description', 'value'];
  public currentAccount: AccountModel =  {
    id:1,
    name: 'My firts account',
    hash: '42342dfds5434jo934r93hj9r',
    created_at: '11/02/2019',
    saldo: 300
  };

  transactions : TransactionModel[] = [];
  constructor() {
  }

  ngOnInit() {
  }

}
