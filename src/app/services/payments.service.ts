import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Payment {
    date:string;
    amount:string;
    status:string
}
@Injectable()
export class PaymentsService {

  constructor(private http: Http) {

  }

  getPayments(account) : Observable<Payment[]>{
    return this.http.get('/mock-data/payments.json')
    .map((response:Response) => <Payment[]>response.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
