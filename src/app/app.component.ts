import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  selectedService: any;
  title = 'My Services';

  serviceSelected(event){
    this.selectedService = event;
  }
}
