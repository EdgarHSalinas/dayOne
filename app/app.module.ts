import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {CardDetailComponent} from './card-detail.component';

import { AppBar } from './app-bar.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppBar,
    AppComponent,
    CardDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

