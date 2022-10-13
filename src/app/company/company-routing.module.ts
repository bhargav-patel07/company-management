import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CFormComponent } from './c-form/c-form.component';
import { CListComponent } from './c-list/c-list.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [{ path: '', component: CompanyComponent, 
children:[
{
  path:'',
  pathMatch:'full',
  redirectTo:'c-list'
},
{
  path:'c-form',
  component:CFormComponent
}

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
