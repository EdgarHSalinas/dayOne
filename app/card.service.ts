
import { Card } from './card';

import { CARDS } from './mock-cards';

import { Injectable } from '@angular/core';



@Injectable()
export class CardService {
  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }

  getCard(id: number): Promise<Card> {
    return this.getCards()
                .then(cards => cards.find(card => card.id === id));
  }
}