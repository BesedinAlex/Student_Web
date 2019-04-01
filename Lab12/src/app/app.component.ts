import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sensors = [
    {id: 100, active: randomBoolean()},
    {id: 200, active: randomBoolean()},
    {id: 300, active: randomBoolean()},
    {id: 400, active: randomBoolean()}
  ];
  createSensor(active) {
    this.sensors.push({id: randomInt(9999), active});
    console.log(this.sensors);
  }
  removeSensor(id) {
    for (let i = 0; i < this.sensors.length; i++) {
      if (this.sensors[i].id === id) {
        this.sensors.splice(i, 1);
      }
    }
  }
}

function randomBoolean() {
  return Math.random() >= 0.5;
}

function randomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
