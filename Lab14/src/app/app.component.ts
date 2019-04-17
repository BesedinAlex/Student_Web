import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { DataService } from './data.service';

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
export class AppComponent implements OnInit {

	userForm: FormGroup;
	users: MyUser[] = [];
	usersDb: [];

	constructor(private dataService: DataService) {
		this.userForm = new FormGroup({
			name: new FormControl(null, [Validators.required]),
			surname: new FormControl(null, [Validators.required]),
			emails: new FormArray([new FormControl(null, [Validators.required])])
		});
	}

	async ngOnInit() {
		try {
			const usersDB = this.dataService.getData();
			this.usersDb = (isNullOrUndefined(await usersDB)) ? [] : await usersDB;
		} catch (err) {
			console.log(err);
		} finally {
			console.log(this.usersDb);
		}
	}

	onUserFormSubmit() {
		this.users.push(this.userForm.value);
		this.userForm.reset();
		console.log(this.users);
	}

	onAddEmail() {
		(<FormArray>this.userForm.controls['emails']).push(new FormControl(null, [Validators.required]));
	}

	onDelEmail(index) {
		(<FormArray>this.userForm.controls['emails']).removeAt(index);
	}

}
