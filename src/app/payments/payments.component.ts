import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'c360-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],

})
export class PaymentsComponent implements OnInit {
    payments: any[];
    title: String;

    constructor() {
        this.title='Payments'
        this.payments = [
            {date:'01/06/2016',amount:'£120.00',status:'Paid'},
            {date:'01/07/2016',amount:'£120.00',status:'Paid'},
            {date:'01/08/2016',amount:'£120.00',status:'Paid'},
            {date:'01/09/2016',amount:'£120.00',status:'To Be Paid'},
            {date:'01/10/2016',amount:'£120.00',status:'To Be Paid'}
        ];
     }

    ngOnInit() {
        console.log('PaymentsComponent.ngOnInit');
    }
}
