import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AccountModel} from "../../../shared/models/account.model";

@Component({
  selector: 'we-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.scss']
})
export class FormTransactionComponent implements OnInit {
  public transactionForm: FormGroup;
  public accounts: AccountModel[];
  public state = 'FORM'; // FORM | CONFIRM

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._buildForm();
  }

  public saveAccount() {
    this._router.navigate(['/panel/accounts/42342dfds5434jo934r93hj9r/view'])
  }

  private _buildForm(): void {
    this.transactionForm = new FormGroup({
      account_hash: new FormControl('', [Validators.required]),
      recipient_hash: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required]),
      description: new FormControl('')
    })
  }

  changeToConfirm(){
    this.state = 'CONFIRM';
  }

  sendTransaction(){

  }
}
