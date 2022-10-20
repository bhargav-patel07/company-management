import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CListComponent } from './c-list/c-list.component';
import { CFormComponent } from './c-form/c-form.component';
import { ManagementService } from './services/management.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { CompanyResolver } from './services/company.resolver';


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
    FormsModule,
    ShareModule,
    NgSelectModule,
    ToastrModule.forRoot()
  ],
  exports:[
    CompanyComponent,
    CListComponent,
    CFormComponent
  ],
  providers:[
    ManagementService,
    CompanyResolver
  ]
})
export class CompanyModule { }
