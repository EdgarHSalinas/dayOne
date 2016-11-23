import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card }     from './card';

import { CardService} from './card.service';




@Component({
  moduleId: module.id,
  selector: 'my-cards',
  templateUrl:'cards.component.html', 
  styleUrls:['cards.component.css'],
})


export class CardsComponent implements OnInit {
  cards : Card[];
  selectedCard: Card;

  constructor(
    private router: Router,
    private cardService: CardService) { }

  getCards(): void {
    this.cardService.getCards().then(cards => this.cards = cards);
  }

  ngOnInit(): void {
    this.getCards();
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCard.id]);
  }
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.cardService.create(title)
      .then(card => {
        this.cards.push(card);
        this.selectedCard = null;
    });
  }

  delete(card: Card): void {
    this.cardService
      .delete(card.id)
      .then(() => {
        this.cards = this.cards.filter(c => c !== card);
        if (this.selectedCard === card) { this.selectedCard = null; }
      });
}
}
