import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Лабораторная работа 12';
  // sensorId = 100;
  // sensorStatus = 'Off';
  // allowNewSensor = false;
  // sensorCreationStatus = 'Nothing was added';
  // inputText = 'test';
  //
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewSensor = true;
  //   }, 2000);
  // }
  //
  // onCreateSensor() {
  //   this.sensorCreationStatus = 'Sensor was added';
  // }

  firstName;
  middleName;
  lastName;
  displayFirstName;
  displayMiddleName;
  displayLastName;
  getInfo() {
    const firstNameIsNone = (this.firstName === undefined || this.firstName === '');
    const middleNameIsNone = (this.middleName === undefined || this.middleName === '');
    const lastNameIsNone = (this.lastName === undefined || this.lastName === '');
    this.displayFirstName = firstNameIsNone ? 'First name is John' : 'First name is ' + this.firstName;
    this.displayMiddleName = middleNameIsNone ? 'There is no middle name' : 'Middle name is ' + this.middleName;
    this.displayLastName = lastNameIsNone ? 'Last name is Doe' : 'Last name is ' + this.lastName;
  }
}
