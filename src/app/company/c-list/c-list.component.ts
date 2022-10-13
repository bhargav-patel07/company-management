import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from '../services/management.service';



@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss']
})
export class CListComponent implements OnInit {

  public table:any;

  constructor(private service:ManagementService, private router:Router) {
    this.table = []
   }
  

  ngOnInit(): void {
    this.getCampanyData();
  }

  getCampanyData(){
    this.service.getCompany().subscribe((result)=>{
      console.log(result);
      this.table=result;
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

}

 

