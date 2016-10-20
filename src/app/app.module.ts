import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { C360ServicesNavComponent } from './c360servicesnav.component';
import { C360ServicesMainComponent } from './c360servicemain.component';
import { C360AccountListComponent } from './c360accounts.component';
import { C360AccountDetailComponent } from './c360accountdetail.component';

@NgModule({
  declarations: [
    AppComponent, 
    C360ServicesNavComponent,
    C360ServicesMainComponent,
    C360AccountListComponent,
    C360AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
