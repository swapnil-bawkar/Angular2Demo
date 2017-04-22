import { Component, OnInit, Input } from '@angular/core';

import { McaModel } from '../mca-model';

@Component({
  selector: 'app-mca-grid',
  template: `
    <p-dataTable [value]="mcaData">
      <p-column field="name" header="Name"></p-column>
      <p-column field="city" header="City"></p-column>
      <p-column field="pin" header="Pin No"></p-column>
      <p-column field="email" header="Email"></p-column>
  </p-dataTable>
  `,
  styles: []
})
export class McaGridComponent implements OnInit {

  @Input() mcaData: McaModel[];

  constructor() { }

  ngOnInit() {
  }

}
