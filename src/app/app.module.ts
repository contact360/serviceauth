import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { C360ServicesNavComponent } from './c360servicesnav.component';
import { C360ServicesMainComponent } from './c360servicemain.component';
import { C360AccountListComponent } from './c360accounts.component';
import { C360AccountDetailComponent } from './c360accountdetail.component';
import { AccountactionsComponent } from './accountactions/accountactions.component';
import { CounciltaxService } from './services/counciltax.service';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsService } from './services/payments.service';

@NgModule({
  declarations: [
    AppComponent,
    C360ServicesNavComponent,
    C360ServicesMainComponent,
    C360AccountListComponent,
    C360AccountDetailComponent,
    PaymentsComponent,
    AccountactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [CounciltaxService,PaymentsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
