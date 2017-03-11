import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { DeliveryRowComponent } from './components/delivery-row/delivery-row.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { DeliveryListService } from './services/delivery-list.service';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryRowComponent,
    DeliveryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),

  ],
  providers: [
    DeliveryListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
