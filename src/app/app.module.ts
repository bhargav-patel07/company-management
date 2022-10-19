import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import {ReactiveFormsModule} from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    BrowserAnimationsModule,  
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 }
