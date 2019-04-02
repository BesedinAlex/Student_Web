import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

interface MyUser {
	name?: string;
	surname?: string;
	emails?: string[];
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	userForm: FormGroup;
	users: MyUser[] = [];

	constructor() {
		this.userForm = new FormGroup({ // создание новой формы
			name: new FormControl(null, [Validators.required]), // поля формы
			surname: new FormControl(null, [Validators.required]),
			emails: new FormArray([ // может быть несколько email, Используем массив
				new FormControl(null, [Validators.required])
			])
		});
	}

	onUserFormSubmit() {
		this.users.push(this.userForm.value); // данные из формы при сабмите добавляем в массив пользователей
		this.userForm.reset(); // сброс значений полей формы
	}

	onAddEmail() {
		(<FormArray>this.userForm.controls['emails']).push(new FormControl(null, [Validators.required]));
		// приводим поле формы к типу FormsArray и добавляем
	}

	onDelEmail(index) {
		(<FormArray>this.userForm.controls['emails']).removeAt(index); // приводим поле формы к типу FormsArray и удаляем элемент по интедксу
	}

}
