import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../services/contacts.service';
import {SortService} from '../services/sort.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  search = '';
  sortIndex: number;

  constructor(
    private contacts: ContactsService,
    private sort: SortService) { }

  async ngOnInit() {
    await this.contacts.getContacts();
    await this.sort.getOption();
    this.sortIndex = +this.sort.option;
    this.search = this.sort.search;
  }

  async updateOption(index) {
    this.sortIndex = index;
    await this.sort.updateOption(index);
  }

  async updateSearchField(arg) {
    this.search = arg;
    await this.sort.updateSearch(arg);
  }

}


