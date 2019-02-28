import {Component, OnInit} from '@angular/core';
import {TransactionModel} from '../../../shared/models';
import {Account} from '../../store/account';

@Component({
  selector: 'we-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {

  public displayedColumns = ['date', 'from', 'description', 'value'];
  public currentAccount: Account = {
    name: 'My firts account',
    hash: '42342dfds5434jo934r93hj9r',
    createdAt: '11/02/2019',
    balance: 300
  };
  public transactions: TransactionModel[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
