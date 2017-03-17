import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AuthModule } from './auth.module';

import { AuthService } from './services/auth.service';

import { AppComponent } from './components/app/app.component';
import { DeliveryRowComponent } from './components/delivery-row/delivery-row.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { DeliveryListService } from './services/delivery-list.service';


const appRoutes: Routes =  [
  { path: '', component: DeliveryListComponent }
];

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
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    AuthModule
  ],
  providers: [
    DeliveryListService,
    AuthService,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
