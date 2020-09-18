import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PublicationService} from './providers/services/publications.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from './modules/gateway-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule,
    BrowserAnimationsModule
  ],
  providers: [PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
