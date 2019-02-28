import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {W3Service} from '../../../shared/services/w3.service';
import {Store} from '@ngrx/store';
import {AccountState, AddAccount, LoadAccounts} from '../../store/account';

@Component({
  selector: 'we-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {
  public accountForm: FormGroup;

  constructor(private router: Router,
              private service: W3Service,
              private store: Store<AccountState>) {
  }

  ngOnInit() {
    this._buildForm();
  }

  public saveAccount() {
    const data = this.accountForm.getRawValue();

    this.service.createAccount(data.name, data.pin)
      .subscribe(account => {
        this.store.dispatch(new AddAccount({account}));
        this.router.navigate(['/panel/accounts/' + account.hash + '/view']);
      });
  }

  private _buildForm(): void {
    this.accountForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required])
    });
  }

}
