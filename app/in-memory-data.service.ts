import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cards = [
  {id: 1, title: 'Monday', note: 'Went to Work'},
  {id: 2, title: 'Tuesday', note: 'did a work out'},
  {id: 3, title: 'Wednesday', note: 'did weights'},
  {id: 4, title: 'Thursday', note: 'did a work out'},
  {id: 5, title: 'Friday', note: 'went running'}
  ];
  return {cards};
  
  }

}

