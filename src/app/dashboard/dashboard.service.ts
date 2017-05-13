import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { McaModel } from './mca-model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  mcaData: McaModel[] = [];

  constructor(private http: Http) { }

  fetchMcaData(): Observable<McaModel[]> {
    const url = '/data/mca.json';
    if (this.mcaData.length > 0) {
      return Observable.of(this.mcaData);
    } else {
      return this.http.get(url).map(res => {
        this.mcaData = res.json();
        return this.mcaData;
      });
    }
  }
}
