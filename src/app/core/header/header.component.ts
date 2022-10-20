import { Component, OnInit } from '@angular/core';
import { CrumbsService } from 'src/app/share/breadCrumbs/crumbs.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public Bread!:string;
  constructor(private breadcrumbService:CrumbsService) { }

  ngOnInit(): void {
    console.log('abc');
    this.breadcrumbService.breadCrumb.subscribe(res=>{
      this.Bread=res;
    })
  }

}
