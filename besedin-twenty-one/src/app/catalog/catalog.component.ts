import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  constructor(private devices: CatalogService) { }

  async ngOnInit() {
    await this.devices.getDevices();
  }

}
