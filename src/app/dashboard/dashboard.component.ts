import { Component, OnInit } from '@angular/core';

import { DashboardService } from "app/dashboard/dashboard.service";
import { UserModel } from './user-model';

@Component({
  selector: 'app-dashboard',
  template: `
    <p-accordion>
      <p-accordionTab header="Users" [selected]="true">
        <app-user-grid [users]="users"></app-user-grid>
      </p-accordionTab>
      <p-accordionTab header="All Batches">
          Content 2
      </p-accordionTab>
      <p-accordionTab header="Content">
          Content 3    
      </p-accordionTab>
    </p-accordion>
    <div class="action-container">
      <button pButton type="button" label="Ok" class="ui-button-secondary"></button>
      <button pButton type="button" label="Post" class="ui-button-secondary"></button>
      <button pButton type="button" label="Reset" class="ui-button-secondary"></button>
    </div>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: row;
      flex: 1;
    }
    p-accordion {
      flex: 1;
      padding: 8px;
    }
    .action-container {
      padding: 8px;
      display: flex;
      flex-direction: column;
    }
    button {
      margin-top: 8px;
    }
    .ui-accordion-content {
      height: 60vh;
    }
    `
  ]
})
export class DashboardComponent implements OnInit {

  private users: UserModel[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.fetchUserData().subscribe((data) => {
      this.users = data;
    });
  }

}
