import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportsWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
