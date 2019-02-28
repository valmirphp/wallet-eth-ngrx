import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'we-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.scss']
})
export class DetailTransactionComponent implements OnInit {

  public transaction = {
    recipient: {
      hash: 'sdfsdfsd'
    },
    to: 'Account name',
    amaunt: 300,
    date: '12/12/2018',
    description: 'ddsadas',
    txid: 'dasdsa',
    status: 'finalizado'
  };

  constructor() { }

  ngOnInit() {
  }

}
