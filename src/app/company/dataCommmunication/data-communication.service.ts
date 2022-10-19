import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
public dataCommunication = new Subject<model>;
  constructor() { }

  getData(company:model){
    this.dataCommunication.next(company);
  }
}
