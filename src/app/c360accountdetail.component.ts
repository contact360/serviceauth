//Account detail
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

export class Account {}
@Component({
  selector: 'c360-account-detail',
  templateUrl: 'account.component.html'
})
export class C360AccountDetailComponent implements OnChanges {
    @Input() SelectedAccount: any;

    ngOnChanges(account){

    }
}
