import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

export class Account {
    accountNumber: string;
    status: string;
    address: string;
    amount: number;
    date: string;
} 

@Injectable()
export class CounciltaxService {


  constructor(private http: Http) { 

  }

  getAccounts() : Observable<Account[]> {
    return this.http.get('/api/accounts.json')
      .map((response:Response) => <Account[]>response.json());
  }
}
