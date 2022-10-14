import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { model } from '../model';
import { ManagementService } from '../services/management.service';



@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss']
})
export class CListComponent implements OnInit {
  [x: string]: any;
  

  companyTable:any;
  constructor(private service:ManagementService, private router:Router) {
    this.companyTable = []
   }
  

  ngOnInit(): void {
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

 

