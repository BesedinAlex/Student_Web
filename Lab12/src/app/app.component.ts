import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scanners = [new Scanner(), new Scanner(), new Scanner()];
  constructor() {
    for (const i of this.scanners) {
      const div = document.createElement('div');
      div.id = 'DIV' + i.name;
      document.querySelector('#here').appendChild(div);
      const p = document.createElement('p');
      p.innerHTML = 'Test';
      p.style.color = i.online ? '#00ff00' : '#ff0000';
      document.querySelector('DIV' + i.name).appendChild(p);
      const button = document.createElement('button');
      document.querySelector('DIV' + i.name).appendChild(button);
    }
  }
}

class Scanner {
  name: string;
  online: boolean;
  constructor() {
    this.name = String(randomInt(100000));
    this.online = randomBoolean();
  }

}

function randomBoolean() {
  return Math.random() > 0;
}
function randomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
