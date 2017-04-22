import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

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
  },{
    label: 'Gcc Screens',
    routerLink: '/gcc-screen'
  }];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', routerLink: '/dashboard' }
    ];
    this.activeItem = this.items[0];
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        const path = event.url;
        const nav = this.navs.find(nav => nav.routerLink === path);
        if(nav) {
          const menuItem = this.items.find(item => item.routerLink === nav.routerLink);
          if(!menuItem) {
            this.items.push(nav);
          }
          this.activeItem = nav;
        }
      });
  }
}
