import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  open(ImageModalComponent: any, dialogconfig: {}, arg2: { errorDetails: null; }) {
    throw new Error('Method not implemented.');
  }
  private baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";

  }
  getCompany(): Observable<model[]> {
    const url = this.baseUrl + 'companyData';
    return this.http.get<model[]>(url);
  }

  // add
  addCompany(company: model): Observable<model> {
    const url = this.baseUrl + 'companyData';
    return this.http.post<model>(url, company);
  }
  // Delete Method
  deleteCompany(id: model): Observable<model> {
    const url = this.baseUrl + 'companyData/' + id;
    return this.http.delete<model>(url);
  }

}
