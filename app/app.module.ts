import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';


import { AppRoutingModule } from './app-routing.module'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { NavComponent }    from './nav.component';
import {CardDetailComponent} from './card-detail.component';
import { CardsComponent }  from './cards.component';
import { CardService }  from './card.service';
import { CardSearchComponent }  from './card-search.component';






@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    NavComponent,
    CardDetailComponent,
    CardsComponent,
    CardSearchComponent
    
  ],
  providers: [CardService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

