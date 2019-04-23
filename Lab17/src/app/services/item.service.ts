import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  goods = [
    { id: 0, name: 'яблоко' },
    { id: 1, name: 'груша' },
    { id: 2, name: 'томат' }
  ];

  constructor() {}

  putItemById(id: number, name: string) {
    this.goods.map(good => {
      if (good.id === id) {
        good.name = name;
      }
    });
  }

  getItemById(id: number) {
    return this.goods.find(good => good.id === id);
  }
}
