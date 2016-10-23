import { Injectable } from '@angular/core';

export class Account {
    accountNumber: string;
    status: string;
    address: string;
    amount: number;
    date: string;
} 

const ACCOUNTS : Account[] = [
  {accountNumber: '51872322',status:'Verified',address:'1 High Street XX7 8BB',amount:120.10,date:'01/10/2016'}
 ,{accountNumber: '34156781',status:'Verified',address:'12 Cross Roads XX2 1AD',amount:134.75,date:'05/10/2016)'}
 ,{accountNumber: '76219012',status:'Verified',address:'62 Letsby Avenue XX1 3BC',amount:101.01,date:'18/10/2016'}
]


@Injectable()
export class CounciltaxService {

  constructor() { }

  getAccounts() : Account[] {
    return ACCOUNTS;
  }
}
