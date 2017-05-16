import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/filter';

import { DashboardService } from './dashboard/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: MenuItem[];
  private activeItem: MenuItem;
  private navs = [{
    label: 'Dashboard',
    routerLink: '/dashboard'
  }, {
    label: 'Tab2',
    routerLink: '/gcc-screen'
  }];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', routerLink: '/dashboard' }
    ];
    this.activeItem = this.items[0];
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        const path = event.url;
        if (path === '/') {
          return;
        }
        let nav = this.navs.find(nav => nav.routerLink === path);
        if (!nav) {
          if (path.match(/post\/[0-9]*/).length > 0) {
            const id = path.split('/')[2];
            this.dashboardService.getUserName(parseInt(id)).subscribe((userName) => {
              nav = {
                label: `${userName} Posts`,
                routerLink: path
              };
              this.navs.push(nav);
              this.activateTab(nav);
            });
          }
        } else {
          this.activateTab(nav);
        }
      });
  }

  activateTab(nav) {
    const menuItem = this.items.find(item => item.routerLink === nav.routerLink);
    if (!menuItem) {
      this.items.push(nav);
    }
    this.activeItem = nav;
  }
}
