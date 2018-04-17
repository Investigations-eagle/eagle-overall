import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';
import { OverallComponent } from './overall/overall.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportsWrapperComponent,
    OverallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: OverallComponent },
      {
        path: 'core',
        loadChildren: './core-wrapper/core-wrapper.module#CoreWrapperModule'
      },
      {
        path: 'reports',
        component: ReportsWrapperComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
