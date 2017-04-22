import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  fetchMcaData() {
    const url = '/data/mca.json';
    return this.http.get(url).map(res => res.json());
  }
}
