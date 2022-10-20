import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { model } from '../model';
import { ManagementService } from './management.service';

@Injectable()
export class CompanyResolver implements Resolve<model> {
  constructor(private companyservice : ManagementService){

  }
  resolve(route: ActivatedRouteSnapshot): Observable<model> {
    return this.companyservice.getDataById(route.params['id'])
  }
}
