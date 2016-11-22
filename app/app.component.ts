import { Component } from '@angular/core';

import { Card }     from './card';

import { AppBar }  from './app-bar.component'

const CARDS: Card[] = [
  {id: 1, title: 'Monday', note: 'Went to Work'},
  {id: 2, title: 'Tuesday', note: 'did a work out'},
  {id: 3, title: 'Wednesday', note: 'did weights'},
  {id: 4, title: 'Thursday', note: 'did a work out'},
  {id: 5, title: 'Friday', note: 'went running'},
]


@Component({
  selector: 'my-app',
  template: `
    <div class ="my-app">

      <app-bar>  </app-bar>

    <h1>{{title}}</h1>

    <h2>Journal History</h2>

      <ul class="cards">

        <li *ngFor="let card of cards"
          [class.selected]="card === selectedCard"
          (click)="onSelect(card)">
        <span class="badge">{{card.id}}</span> {{card.title}}
        </li>
      </ul>

    <my-card-detail [card]="selectedCard"></my-card-detail>
  
    </div>
  
    `,
  
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .cards {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .cards li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .cards li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .cards li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .cards .text {
      position: relative;
      top: -3px;
    }
    .cards .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})


export class AppComponent { 
  title = 'Day One';
  cards = CARDS;

  selectedCard: Card;

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
}
