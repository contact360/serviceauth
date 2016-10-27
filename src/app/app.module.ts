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
<<<<<<< HEAD

=======
import { PaymentsComponent } from './payments/payments.component';
>>>>>>> 1e55159bf97f9f8189d19826de2c3fe589106748

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
  providers: [CounciltaxService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
