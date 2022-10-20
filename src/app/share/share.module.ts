import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipe/system.pipe';
import { LogoPipe } from './pipe/logo.pipe';
import { CrumbsService } from './breadCrumbs/crumbs.service';

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
  ],
providers:[
 
]
})
export class ShareModule { }
