import {Injectable} from '@angular/core';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class SortService extends DatabaseService {

  option: number;
  search: string;

  async getOption() {
    try {
      const temp = await this.getData('sort');
      this.option = temp.option;
      this.search = temp.search;
    } catch (err) {
      console.log('Sort option didn\'t load.');
    }
  }

  async updateOption(index) {
    try {
      this.option = index;
      await this.putSortData();
    } catch (err) {
      console.log('Couldn\'t update sort options on server.');
    }
  }

  async updateSearch(arg) {
    try {
      this.search = arg;
      await this.putSortData();
    } catch (err) {
      console.log('Couldn\'t update search field on server.');
    }
  }

  async putSortData() {
    await this.putData('sort', '', {search: this.search, option: this.option});
  }

}
