
//
//
//
import { Component, Input } from '@angular/core';



@Component({
  selector: 'c360-services-main',
  //templateUrl: './c360servicesnav.component.html',
  //styleUrls: ['./c360servicesnav.component.css']
  template:
  `<div *ngIf="Selected"><c360-account-list [Selected]="Selected" (onRowSelected)="onRowSelected($event)"></c360-account-list>
  <div class="row">
      <c360-account-detail [SelectedAccount]="SelectedRow"></c360-account-detail>

   </div>

      <c360-account-actions></c360-account-actions>
  </div> `,

  styles:[]
})
export class C360ServicesMainComponent {
    @Input() Selected: any;
    SelectedRow: any;
    onRowSelected(row){
      this.SelectedRow = row;
    }
}
