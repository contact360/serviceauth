import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const OPTIONS:any[] = [
    {name:"Council Tax", services:[{reference:"123345"},{reference:"876311"}]},
    {name:"Business Rates", services:[]},
    {name:"Blue Badge", services:[]},
    {name:"Business Services", services:[]}

];
@Component({
  selector: 'c360-services-nav',
  //templateUrl: './c360servicesnav.component.html',
  //styleUrls: ['./c360servicesnav.component.css']
  template: `<ngb-accordion>
        <ngb-panel *ngFor="let option of options" [title]="option.name" [disabled]="option.services.length==0">
        <template ngbPanelContent>
            <div *ngFor="let s of option.services"><a href="#" (click)="serviceClicked(option,s)">{{s.reference}}</a></div>
        </template>
        </ngb-panel>
    </ngb-accordion>`,
 
  styles:['ul {list-style-type: none; margin:0; padding:0;} li { padding:4px; margin:1px;border: 1px solid #ccc;}']
})
export class C360ServicesNavComponent {
    options = OPTIONS;

    @Output() serviceSelected = new EventEmitter();
    serviceClicked(x,y){
        this.serviceSelected.emit({Name: x.name, Reference:y.reference});
    }
}
