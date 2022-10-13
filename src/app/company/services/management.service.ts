import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  private baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";

  }
  getCompany(): Observable<model> {
    const url = this.baseUrl + 'companyData';
    return this.http.get<model>(url);
  }
  // Delete Method
  deleteCompany(id:model):Observable<model>{
const url=this.baseUrl + 'companyData/' + id;
return this.http.delete<model>(url); 
 }
}
