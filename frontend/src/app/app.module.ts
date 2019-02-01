import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsrAddComponent } from './usr-add/usr-add.component';
import { UsrGetComponent } from './usr-get/usr-get.component';
import { UsrEditComponent } from './usr-edit/usr-edit.component';


@NgModule({
  // comment
  declarations: [
    AppComponent,
    UsrAddComponent,
    UsrGetComponent,
    UsrEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
