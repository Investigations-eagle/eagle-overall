import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReportsWrapperComponent } from './reports-wrapper.component';
import { ReportsModule } from 'eagle-reports';


@NgModule({
  imports: [
    CommonModule,
    ReportsModule,
    RouterModule.forChild([
      { path: 'core', pathMatch: 'full', component: ReportsWrapperComponent }
    ]),
  ],
  declarations: [ReportsWrapperComponent],
  exports: [ReportsWrapperComponent]
})
export class ReportsWrapperModule { }
