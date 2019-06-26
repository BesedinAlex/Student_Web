import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CatalogService} from '../services/catalog.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.sass']
})
export class AddPhoneComponent {

  form: FormGroup;

  constructor(
    private router: Router,
    private devices: CatalogService
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      screen: new FormControl(null, [Validators.required]),
      camera: new FormControl(null, [Validators.required]),
      memory: new FormControl(null, [Validators.required]),
    });
  }

  async addDevice() {
    await this.devices.addDevice(this.form.value);
    if (this.devices.lastActionIsDone) {
      this.router.navigate(['/catalog']);
    }
  }

}
