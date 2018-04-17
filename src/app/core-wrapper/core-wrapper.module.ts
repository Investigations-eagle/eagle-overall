import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreWrapperComponent } from './core-wrapper.component';
import { CoreModule } from 'core-eagle';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: 'core', pathMatch: 'full', component: CoreWrapperComponent }
    ]),
  ],
  declarations: [CoreWrapperComponent],
  exports: [CoreWrapperComponent]
})
export class CoreWrapperModule { }
