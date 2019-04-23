import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  goods = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.goods = this.itemService.goods;
  }
}
