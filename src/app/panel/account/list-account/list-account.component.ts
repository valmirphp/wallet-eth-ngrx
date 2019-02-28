import {Component, OnInit} from '@angular/core';
import {AccountModel} from '../../../shared/models';

@Component({
  selector: 'we-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {

  public accounts: AccountModel[] = [
    {
      name: 'My firts account',
      hash: '42342dfds5434jo934r93hj9r',
      balance: 55,
      createdAt: '11/02/2019'
    },
    {
      name: 'My firts account',
      hash: '42342dfds5434jo934r93hj9r',
      balance: 55,
      createdAt: '11/02/2019'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
