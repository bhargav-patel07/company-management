import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { CrumbsService } from 'src/app/share/breadCrumbs/crumbs.service';
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

  public searchText: string;

  companyTable: any;
  constructor(private service: ManagementService, private router: Router, private datacommunicationService: DataCommunicationService,private breadCrumbsService:CrumbsService ) {
    this.companyTable = []
    this.searchText = ''
  }


  ngOnInit(): void {
    this.datacommunicationService.dataCommunication.subscribe((data) => {
      console.log(data); 

// 
      if (data) {
        this.getCampanyData();
      }
    })
    this.getCampanyData();
  }
// 
  getCampanyData() {
    this.service.getCompany().subscribe((result) => {
      console.log(result);
      this.companyTable = result;
    })
  }

  onDelete(items: any) {
    this.service.deleteCompany(items).subscribe((result) => {
      console.log(result);
      this.getCampanyData();
    })
  }

  formShow() {
    this.router.navigate(['company/c-form']);

    this.breadCrumbsService.breadCrumb.next('add');
  } 

  // 
  onEdit(items:string){

  this.breadCrumbsService.breadCrumb.next(items) 
  }

  }




