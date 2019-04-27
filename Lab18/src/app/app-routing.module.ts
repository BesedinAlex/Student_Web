import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: '', component: ContactsComponent},
  {path: 'add', component: AddContactComponent},
  {path: 'edit/:id', component: EditContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
