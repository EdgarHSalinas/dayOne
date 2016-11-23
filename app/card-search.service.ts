import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Card }           from './card';

@Injectable()
export class CardSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Card[]> {
    return this.http
               .get(`app/cards/?title=${term}`)
               .map((r: Response) => r.json().data as Card[]);
  }
}
