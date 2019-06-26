import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import {HomeComponent} from './home/home.component';
import {AddPhoneComponent} from './add-phone/add-phone.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'add', component: AddPhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
