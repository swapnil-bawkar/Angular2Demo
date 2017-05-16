import { Component, OnInit, Input } from '@angular/core';
import { Router }    from '@angular/router';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-grid',
  template: `
    <p-dataTable [value]="users" (onRowDblclick)="rowDblClick($event.data)" selectionMode="single" [(selection)]="selectedUser" dataKey="id">
      <p-column field="name" header="Name"></p-column>
      <p-column field="username" header="Username"></p-column>
      <p-column field="email" header="Email"></p-column>
      <p-column field="address.city" header="City"></p-column>
      <p-column field="address.zipcode" header="Pin No"></p-column>
      <p-column field="phone" header="Phone"></p-column>
      <p-column field="company.name" header="Company"></p-column>
  </p-dataTable>
  `,
  styles: []
})
export class UserGridComponent implements OnInit {

  @Input() users: UserModel[];
  private selectedUser: UserModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rowDblClick(user) {
    console.log(user);
    // Navigate with relative link
    this.router.navigate(['/post', user.id]);
  }

}
