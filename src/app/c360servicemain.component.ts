import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'c360-services-main',
  //templateUrl: './c360servicesnav.component.html',
  //styleUrls: ['./c360servicesnav.component.css']
  template: `<div *ngIf="Selected"><c360-account-list [Selected]="Selected" (onRowSelected)="onRowSelected($event)"></c360-account-list>
        <c360-account-detail [SelectedAccount]="SelectedRow"></c360-account-detail>
  </div>

  `,
 
  styles:[]
})
export class C360ServicesMainComponent {
    @Input() Selected: any;
    SelectedRow: any;
    onRowSelected(row){
      this.SelectedRow = row;
    }
}