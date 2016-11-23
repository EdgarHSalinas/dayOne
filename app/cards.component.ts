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
}
