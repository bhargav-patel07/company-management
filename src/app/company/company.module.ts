import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CListComponent } from './c-list/c-list.component';
import { CFormComponent } from './c-form/c-form.component';
import { ManagementService } from './services/management.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanyComponent,
    CListComponent,
    CFormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CompanyComponent,
    CListComponent,
    CFormComponent
  ],
  providers:[
    ManagementService
  ]
})
export class CompanyModule { }
