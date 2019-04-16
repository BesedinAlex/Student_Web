import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Веб Технологии';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    name: 'имя',
    type: 'тип',
    coords:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
  myStr = 'string';
}
