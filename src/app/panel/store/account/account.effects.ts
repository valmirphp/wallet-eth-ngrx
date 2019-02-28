import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AccountActionTypes, LoadAccounts, RequestAccounts} from './account.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {W3Service} from '../../../shared/services/w3.service';
import {Observable, of} from 'rxjs';


@Injectable()
export class AccountEffects {

  constructor(private actions$: Actions, private service: W3Service) {
  }

  @Effect()
  searchProjects = this.actions$
    .pipe(
      ofType<RequestAccounts>(AccountActionTypes.RequestAccounts),
      mergeMap(() => {
        return this.service.search().pipe(
          map(accounts => new LoadAccounts({accounts})),
          catchError(error => this.handleError(error))
        );
      }),
    );

  private handleError(err): Observable<any> {
    //  const error = new PayloadOfError(err);
    return of(err);
  }
}
