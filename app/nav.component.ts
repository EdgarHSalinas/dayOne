import { Component, OnInit } from '@angular/core';

import { Card } from './card';
import { CardService } from './card.service';

@Component({
  moduleId: module.id,
  selector: 'my-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']

})

export class NavComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards()
    .then(cards => this.cards = cards.slice(0,4));
  }

 }