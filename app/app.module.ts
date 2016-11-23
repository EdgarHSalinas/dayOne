import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { NavComponent }    from './nav.component';

import {CardDetailComponent} from './card-detail.component';
import { CardsComponent }  from './cards.component';
import { CardService }  from './card.service';

import { AppRoutingModule } from './app-routing.module'



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    NavComponent,
    CardDetailComponent,
    CardsComponent,
    
  ],
  providers: [CardService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

