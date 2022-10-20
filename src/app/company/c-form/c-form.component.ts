import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , FormControl, AbstractControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import {model} from 'src/app/company/model';
import { DataCommunicationService } from '../dataCommmunication/data-communication.service';
import { ManagementService } from '../services/management.service';


@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.scss']
})
export class CFormComponent implements OnInit {
[x:string]:any;
  public companyForm!: FormGroup;
  public companyTable!: model[];
  public items: any;
  public id:any;
  public company_name:string='';

  // Multiple tag
  cities1 = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

cities2 = [
  {id: 1, name: 'valsad'},
  {id: 2, name: 'bilimora'},
  {id: 3, name: 'dungri', disabled: true},
  {id: 4, name: 'dubai'},
  {id: 5, name: 'new york'}
];



  constructor(private managementservices: ManagementService, private activatedRoute:ActivatedRoute, private datacommunicationService:DataCommunicationService) {
    this.activatedRoute.params.subscribe((data)=>{
      // this.id=data['company']?.id;
      this.id = data['id'];
      console.log(activatedRoute);
      
      this.company_name = data['company']?.companyName;
      console.log(this.id);
      
    })
    this.companyTable = [];
    this.companyForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      companyDescribtion: new FormControl('', [Validators.required]),
      selectTag: new FormControl('', [Validators.required]),
      selectlogo: new FormControl('', [Validators.required])
    })
    console.log(activatedRoute);
    
   }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res=>{
      this.companyForm.patchValue(res['company'])
    })
    this.companyTable
  }
  get function(): { [key: string]: AbstractControl } {
    return this.companyForm.controls;
  }

  save(){

    if (this.id){
      this.updateData()
    }else{
      this.managementservices.addCompany(this.companyForm.value).subscribe(res=>{
        // console.log(res);
      this.datacommunicationService.getData(res);
      
        })
    }
  }  
  public reset(): void {
    this.companyForm.reset();
  }

  updateData(){
    this.managementservices.updateCompany(Number(this.id),this.companyForm.value).subscribe(res=>{
      this.getCmpanyData();
    })
  }

  getCmpanyData(){
    this.managementservices.getCompany().subscribe(res=>{
      this.companyTable=res  
    });
  }

}
