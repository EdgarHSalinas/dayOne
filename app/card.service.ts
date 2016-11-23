import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import { Card } from './card';



@Injectable()
export class CardService {

  private cardsUrl = 'app/cards'; // Url to fake web api

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // Take out in production
    return Promise.reject(error.message || error);
  }

  getCards(): Promise<Card[]> {
    return this.http.get(this.cardsUrl)
                .toPromise()
                .then(response => response.json().data as Card[])
                .catch(this.handleError);
  }

  getCard(id: number): Promise<Card> {
    return this.getCards()
                .then(cards => cards.find(card => card.id === id));
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(card: Card): Promise<Card> {
    const url = `${this.cardsUrl}/${card.id}`;
    return this.http
      .put(url, JSON.stringify(card), {headers: this.headers})
      .toPromise()
      .then(() => card)
      .catch(this.handleError);
  }

  create(title: string): Promise<Card> {
    return this.http
      .post(this.cardsUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
}
  delete(id: number): Promise<void> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
}


}