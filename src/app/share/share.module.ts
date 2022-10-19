import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipe/system.pipe';
import { LogoPipe } from './pipe/logo.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    LogoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    LogoPipe
  ]
})
export class ShareModule { }
