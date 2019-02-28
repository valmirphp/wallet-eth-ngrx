import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Account} from '../../store/account';

@Component({
  selector: 'we-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.scss']
})
export class FormTransactionComponent implements OnInit {
  public transactionForm: FormGroup;
  public accounts: Account[] = [
    {
      name: 'My firts account',
      hash: '42342dfds5434jo934r93hj9r',
      createdAt: '11/02/2019'
    }
  ];
  public state = 'FORM'; // FORM | CONFIRM
  public selectedAccount: Account;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this._buildForm();
  }

  private _buildForm(): void {
    this.transactionForm = new FormGroup({
      account_hash: new FormControl('', [Validators.required]),
      recipient_hash: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }

  changeAccount(ev) {
    this.selectedAccount = ev.value;
    this.transactionForm.get('account_hash').setValue(this.selectedAccount.hash);
  }

  changeToConfirm() {
    this.state = 'CONFIRM';
  }

  changeToForm() {
    this.state = 'FORM';
  }

  sendTransaction() {
    this.router.navigate(['/panel/transactions/42342dfds5434jo934r93hj9r/finish']);
  }


}
