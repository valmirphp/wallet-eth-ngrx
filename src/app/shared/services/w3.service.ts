import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {Account} from '../../panel/store/account';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class W3Service {

  private web3: Web3;

  constructor(private http: HttpClient) {
    this.web3 = new Web3(new Web3.providers.HttpProvider(environment.web3Host));
  }

  createAccount(name: string, password: string): Observable<Account> {
    const acc = this.web3.eth.accounts.create(password);

    const account: Account = {
      name,
      hash: acc.address,
      createdAt: (new Date()).toString()
    };

    return this.http.post(`${environment.apiHost}/accounts`, account)
      .pipe(map(a => account));
  }

  getAccounts(): Promise<string[]> {
    console.log('createAccount');

    return this.web3.eth.getAccounts();
  }

  search(): Observable<any> {
    return this.http.get(`${environment.apiHost}/accounts`);
  }
}
