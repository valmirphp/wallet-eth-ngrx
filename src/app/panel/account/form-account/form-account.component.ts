import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'we-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {
  public accountForm: FormGroup;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._buildForm();
  }

  public saveAccount() {
    this._router.navigate(['/panel/accounts/42342dfds5434jo934r93hj9r/view'])
  }

  private _buildForm(): void {
    this.accountForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required])
    })
  }

}
