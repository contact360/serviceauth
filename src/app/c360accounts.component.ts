import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounciltaxService } from './services/counciltax.service';

@Component({
  selector: 'c360-account-list',
  template: `<div>
    <span></span>
    <div><h3>{{Selected.Name}}</h3></div>
    <div>
        <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th *ngFor="let column of columns">{{column.heading}}</th>
            <tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of rows" (click)="rowClicked(row)">
                <td *ngFor="let column of columns">{{row[column.property]}}</td>
            </tr>
        </tbody>
        </table>
    </div>
  </div> `,
 
  styles:[]
})
export class C360AccountListComponent {
    @Input() Selected: any;
    @Output() onRowSelected = new EventEmitter();
    columns: Object[];
    rows: Object[];
    title: String;

    constructor(private counciltaxService: CounciltaxService){
        this.columns = [{ heading: 'Account', property: 'accountNumber'},
        { heading: 'Status', property:'status'},{ heading: 'Address', property:'address'},{ heading: 'Next Amount', property:'amount'},{ heading: 'Date', property:'date'}];
        this.rows = this.counciltaxService.getAccounts()
         /*[
            { account: '232323', status:'Verified',address:'1 The Limes', amount:'£120.00',date:'02/11/2016' },
            { account: '109245', status:'Verified',address:'16 Corby Avenue', amount:'£137.20',date:'12/11/2016' },
            { account: '825102', status:'Verified',address:'48 Strawberry Fields ', amount:'£160.20',date:'05/11/2016' }
            ]*/
    }

    rowClicked(row){
        this.onRowSelected.emit(row);
    }
}
