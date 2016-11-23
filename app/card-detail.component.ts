import { Component, Input } from '@angular/core';
import { Card }     from './card';

@Component({
    selector: 'my-card-detail',
    template: `
  <div *ngIf="card">
    <h2>{{card.note}} details!</h2>
    <div><label>id: </label>{{card.id}}</div>
    <div>
      <label>title: </label>
      <input [(ngModel)]="card.title" placeholder="title"/>
      <label>Note: </label>
      <input [(ngModel)]="card.note" placeholder="note"/>
    </div>
  </div>
`
})

export class CardDetailComponent {
  @Input()
  card: Card;

}