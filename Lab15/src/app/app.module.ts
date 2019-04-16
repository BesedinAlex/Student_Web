import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { AppFactorialPipe } from './pipes/app-factorial.pipe';
import { AppPowPipe } from './pipes/app-pow.pipe';
import { ExampleComponent } from './example/example.component';
import { AppMonthFilterPipe } from './pipes/app-month-filter.pipe';
import { MySuperNewPipePipe } from './pipes/my-super-new-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppFactorialPipe,
    AppPowPipe,
    ExampleComponent,
    AppMonthFilterPipe,
    MySuperNewPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'RUS' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
