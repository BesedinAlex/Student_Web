import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  static id = 0;

  workerElements = []; // массив объектов, отобращаемых при помощи компонента worker

  onWorkerAdded(workerData: { name: string, role: string }) { // обработчик события workerCreated из компонента Interface
    this.workerElements.push({
      name: workerData.name,
      role: workerData.role,
      type: 'сотрудник',
      id: AppComponent.id
    });
    AppComponent.id++;
  }

  onHeadWorkerAdded(workerData: { name: string, role: string }) { // обработчик события headWorkerCreated из компонента Interface
    this.workerElements.push({
      name: workerData.name,
      role: workerData.role,
      type: 'руководитель',
      id: AppComponent.id
    });
  }

  fireWorker(id) {
    for (let i = 0; i < this.workerElements.length; i++) {
      if (this.workerElements[i].id === id) {
        this.workerElements.splice(i, 1);
      }
    }
  }
}
