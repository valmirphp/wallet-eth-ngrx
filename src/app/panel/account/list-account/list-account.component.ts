import {Component, OnInit} from '@angular/core';
import {AccountModel} from "../account.model";

@Component({
  selector: 'we-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {

  public accounts: AccountModel[] = [
    {
      id:1,
      name: 'My firts account',
      hash: '42342dfds5434jo934r93hj9r',
      created_at: '11/02/2019'
    }
  ]
  constructor() {
  }

  ngOnInit() {
  }

}
