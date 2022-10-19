import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataCommunicationService } from '../dataCommmunication/data-communication.service';
import { model } from '../model';
import { ManagementService } from '../services/management.service';




@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss']
})
export class CListComponent implements OnInit {
  [x: string]: any;

public searchText:string;

  companyTable:any;
  constructor(private service:ManagementService, private router:Router, private datacommunicationService:DataCommunicationService) {
    this.companyTable = []
    this.searchText=''
   }
  

  ngOnInit(): void {
    this.datacommunicationService.dataCommunication.subscribe((data)=>{
      console.log(data);
      
      if(data){
        this.getCampanyData();  
      }
    })
    this.getCampanyData();  
  }

  getCampanyData(){
    this.service.getCompany().subscribe((result)=>{
      console.log(result);
      this.companyTable=result;
    })
  }
  
onDelete(items:any){
  this.service.deleteCompany(items).subscribe((result)=>{
    console.log(result);
    this.getCampanyData();
  })
}
 
  formShow(){
    this.router.navigate(['company/c-form'])
  }

 public editItem(user:model):void{
  

}
 


}

 

