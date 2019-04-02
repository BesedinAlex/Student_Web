import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  btnEnabled = false;

  @Output() workerCreated = new EventEmitter<{ name: string, role: string }>();
  @Output() headWorkerCreated = new EventEmitter<{ name: string, role: string }>();

  @ViewChild('workerNameInput') workerNameInput: ElementRef;
  @ViewChild('workerRoleInput') workerRoleInput: ElementRef;

  onTextChange() {
    this.btnEnabled = this.workerRoleInput.nativeElement.value.length > 0 && this.workerNameInput.nativeElement.value.length > 0;
  }

  onAddWorker(nameInput: HTMLInputElement) {
    this.workerCreated.emit({
      name: nameInput.value,
      role: this.workerRoleInput.nativeElement.value
    });
  }

  onAddHeadWorker(nameInput: HTMLInputElement) {
    this.headWorkerCreated.emit({
      name: nameInput.value,
      role: this.workerRoleInput.nativeElement.value
    });
  }

}
