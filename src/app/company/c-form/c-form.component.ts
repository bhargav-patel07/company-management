import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , FormControl, AbstractControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import {model} from 'src/app/company/model';
import { ManagementService } from '../services/management.service';
@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.scss']
})
export class CFormComponent implements OnInit {
[x:string]:any;
  public companyForm!: FormGroup;
  public table!: model[];
  public items: any;
  public id:any;



  constructor(private managementservices: ManagementService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.id=params['id'];
    })
    this.table = [];
    this.companyForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      companyDescribtion: new FormControl('', [Validators.required]),
      selectTag: new FormControl('', [Validators.required]),
      selectlogo: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }
  get function(): { [key: string]: AbstractControl } {
    return this.companyForm.controls;
  }
}
