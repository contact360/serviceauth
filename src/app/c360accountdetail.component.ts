//Account detail
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'c360-account-detail',
  template:'<div></div>'
})
export class C360AccountDetailComponent implements OnChanges {
    @Input() SelectedAccount: any;

    ngOnChanges(account){
        console.log('changed');
        console.log(account);
    }
}

