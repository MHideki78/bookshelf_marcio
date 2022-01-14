import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppDialogosComponent } from './app-dialogos/app-dialogos.component';
import { PipesPipe } from './app-pipes/pipes.pipe';



@NgModule({
  declarations: [
    AppDialogosComponent,
    PipesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppDialogosComponent,
    PipesPipe
  ]
})
export class AppCompartilhadoModule { }
