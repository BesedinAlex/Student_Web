import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  searchMonth = '';

  months = [
    {name: 'январь'},
    {name: 'февраль'},
    {name: 'март'},
    {name: 'апрель'},
    {name: 'май'},
    {name: 'июнь'},
    {name: 'июль'},
    {name: 'август'},
    {name: 'сентябрь'},
    {name: 'октябрь'},
    {name: 'ноябрь'},
    {name: 'декабрь'},
  ];
  constructor() { }

  ngOnInit() {
 
  }
}
