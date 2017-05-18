import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcc-screen',
  template: `
    <p-dataTable [value]="cars">
        <p-column *ngFor="let col of cols" [field]="col.field" [header]="col.header">
          <ng-template let-col let-car="rowData" let-ri="rowIndex" pTemplate="body">
              <span *ngIf="col.field==='year'">ss{{car[col.field]}}</span>
              <span *ngIf="col.field==='vin'">bin{{car[col.field]}}</span>
              <span *ngIf="col.field.indexOf('vin', 'year') === -1">normal{{car[col.field]}}</span>
          </ng-template>          
        </p-column>
    </p-dataTable>
  `,
  styles: [``]
})
export class GccScreenComponent implements OnInit {

  cars = [{
    vin: 'abc',
    year: '2017/05/18',
    brand: 'PQR',
    color: 'red'
  }];
    
  cols: any[];

  constructor() { }

  ngOnInit() {
      
      
      this.cols = [
          {field: 'vin', header: 'Vin'},
          {field: 'year', header: 'Year'},
          {field: 'brand', header: 'Brand'},
          {field: 'color', header: 'Color'}
      ];
  }

}
