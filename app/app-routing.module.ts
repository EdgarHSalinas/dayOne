import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent }   from './nav.component';
import { CardsComponent }      from './cards.component';
import { CardDetailComponent }  from './card-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'nav',  component: NavComponent },
  { path: 'detail/:id', component: CardDetailComponent },
  { path: 'cards',     component: CardsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
