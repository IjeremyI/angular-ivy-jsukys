import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PromiseErrorFlowComponent } from './PromiseErrorFlowComponent/promise-error-flow.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule 
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PromiseErrorFlowComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
