import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkerElementComponent } from './worker-element/worker-element.component';
import { InterfaceComponent } from './interface/interface.component';
// import {MdButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {MdAutocompleteModule} from '@angular/material';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WorkerElementComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // MdButtonModule,
    BrowserAnimationsModule,
    // MdAutocompleteModule
    // MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
