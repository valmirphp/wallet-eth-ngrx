import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {AccountModel} from '../models';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class W3Service {

  private web3: Web3;

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider(environment.web3Host));
  }

  createAccount(name: string, password: string): Promise<AccountModel> {
    const acc = this.web3.eth.accounts.create(password);

    return Promise.resolve({
      name,
      hash: acc.address
    } as AccountModel);
  }

  getAccounts(): Promise<string[]> {
    console.log('createAccount');

    return this.web3.eth.getAccounts();
  }
}
