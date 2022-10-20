import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class CrumbsService {
  public breadCrumb: Subject<string>;
  constructor() {
    this.breadCrumb = new Subject();
  }

}
