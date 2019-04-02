import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-worker-element',
  templateUrl: './worker-element.component.html',
  styleUrls: ['./worker-element.component.css']
})
export class WorkerElementComponent {

  @Input() worker: { name: string, type: string, role: string, id: number };

  @Output() id = new EventEmitter<number>();

  fireWorker(id) {
    this.id.emit(id);
  }

}
