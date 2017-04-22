import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <ul>
      <li>
        <a routerLink="/dashboard">Dashboard</a>
      </li>
      <li>
        <a routerLink="/gcc-screen">Gcc Screen</a>
      </li>
      <li>
        <a>Services</a>
      </li>
    </ul>
  `,
  styles: [
    `ul { list-style: none; padding: 0px; }
    li {     border-bottom: 1px solid rgba(207,216,220,0.56);
    color: #607D8B;
    margin: 0;
    padding: 0;}
    a {
        box-sizing: border-box;
        color: #607D8B;
        display: block;
        font-size: 13px;
        font-weight: 400;
        line-height: 47px;
        text-decoration: none;
        padding: 0 16px;
        position: relative;
        cursor: pointer;
    }`
  ]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
