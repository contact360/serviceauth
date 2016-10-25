import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounciltaxService, Account } from './services/counciltax.service';
import { Observable } from 'rxjs/Rx';

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
            <tr *ngFor="let row of rows | async" (click)="rowClicked(row)">
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
    rows: Observable<Account[]>;
    title: String;

    constructor(private counciltaxService: CounciltaxService){
        this.columns = [{ heading: 'Account', property: 'accountNumber'},
        { heading: 'Status', property:'status'},{ heading: 'Address', property:'address'},{ heading: 'Next Amount', property:'amount'},{ heading: 'Date', property:'date'}];
        
        this.rows = this.counciltaxService.getAccounts();
    }

    rowClicked(row){
        this.onRowSelected.emit(row);
    }
}
