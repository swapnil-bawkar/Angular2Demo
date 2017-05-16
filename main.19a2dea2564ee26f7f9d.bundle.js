webpackJsonp([1,4],{0:function(t,e,n){t.exports=n("x35b")},"2oh9":function(t,e,n){"use strict";var o=n("3j3K"),r=n("5oXY");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){},t.prototype.rowDblClick=function(t){console.log(t),this.router.navigate(["/post",t.id])},t}();i([n.i(o.Input)(),a("design:type",Array)],c.prototype,"users",void 0),c=i([n.i(o.Component)({selector:"app-user-grid",template:'\n    <p-dataTable [value]="users" (onRowDblclick)="rowDblClick($event.data)" selectionMode="single" [(selection)]="selectedUser" dataKey="id">\n      <p-column field="name" header="Name"></p-column>\n      <p-column field="username" header="Username"></p-column>\n      <p-column field="email" header="Email"></p-column>\n      <p-column field="address.city" header="City"></p-column>\n      <p-column field="address.zipcode" header="Pin No"></p-column>\n      <p-column field="phone" header="Phone"></p-column>\n      <p-column field="company.name" header="Company"></p-column>\n  </p-dataTable>\n  ',styles:[]}),a("design:paramtypes",["function"==typeof(s=void 0!==r.Router&&r.Router)&&s||Object])],c);var s},"3avZ":function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=r([n.i(o.Component)({selector:"app-header",template:"\n    <p>\n      Persistant Tab Demo\n    </p>\n  ",styles:[]}),i("design:paramtypes",[])],a)},"5xMp":function(t,e){t.exports='<div class="app-container">\r\n  <app-header></app-header>\r\n  <div class="app-main">\r\n    <app-navigation></app-navigation>\r\n    <div class="tab-container">\r\n      <p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>'},"70FX":function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"",""]),t.exports=t.exports.toString()},Cd9f:function(t,e,n){"use strict";var o=n("3j3K"),r=n("5oXY"),i=n("Rvy0"),a=n("ko13"),c=n("HsfM");n.d(e,"a",function(){return p});var s=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=[{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"dashboard",component:i.a},{path:"gcc-screen",component:a.a},{path:"post/:id",component:c.a}],p=function(){function t(){}return t}();p=s([n.i(o.NgModule)({imports:[r.RouterModule.forRoot(u)],exports:[r.RouterModule]})],p)},HsfM:function(t,e,n){"use strict";var o=n("3j3K"),r=n("5oXY"),i=n("uCY4"),a=(n.n(i),n("x0+n"));n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n){this.dashboardService=t,this.route=e,this.router=n,this.posts=[]}return t.prototype.ngOnInit=function(){var t=this;this.paramSubscription=this.route.params.subscribe(function(e){var n=+e.id;t.dashboardService.getPosts(n).subscribe(function(e){t.posts=e})})},t.prototype.ngOnDestroy=function(){this.paramSubscription.unsubscribe()},t}();u=c([n.i(o.Component)({selector:"app-user-post",template:n("gyuo"),styles:[n("70FX")]}),s("design:paramtypes",["function"==typeof(p=void 0!==a.a&&a.a)&&p||Object,"function"==typeof(f=void 0!==r.ActivatedRoute&&r.ActivatedRoute)&&f||Object,"function"==typeof(d=void 0!==r.Router&&r.Router)&&d||Object])],u);var p,f,d},Iksp:function(t,e,n){"use strict";var o=n("Qbdm"),r=n("3j3K"),i=n("NVOs"),a=n("Fzro"),c=n("KN8t"),s=n("/OJH"),u=(n.n(s),n("0gB7")),p=(n.n(u),n("ovmJ")),f=(n.n(p),n("9tKQ")),d=(n.n(f),n("1mPT")),l=(n.n(d),n("Cd9f")),b=n("YWx4"),h=n("3avZ"),v=n("uvQH"),y=n("Rvy0"),m=n("ko13"),g=n("2oh9"),x=n("x0+n"),R=n("HsfM");n.d(e,"a",function(){return O});var j=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=function(){function t(){}return t}();O=j([n.i(r.NgModule)({declarations:[b.a,h.a,v.a,y.a,m.a,g.a,R.a],imports:[o.a,i.FormsModule,a.a,l.a,c.a,s.TabMenuModule,u.AccordionModule,p.ButtonModule,f.DataTableModule,d.DataListModule],providers:[x.a],bootstrap:[b.a]})],O)},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},Rvy0:function(t,e,n){"use strict";var o=n("3j3K"),r=n("x0+n");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.dashboardService=t,this.users=[]}return t.prototype.ngOnInit=function(){var t=this;this.dashboardService.fetchUserData().subscribe(function(e){t.users=e})},t}();c=i([n.i(o.Component)({selector:"app-dashboard",template:'\n    <p-accordion>\n      <p-accordionTab header="Users" [selected]="true">\n        <app-user-grid [users]="users"></app-user-grid>\n      </p-accordionTab>\n      <p-accordionTab header="All Batches">\n          Content 2\n      </p-accordionTab>\n      <p-accordionTab header="Content">\n          Content 3    \n      </p-accordionTab>\n    </p-accordion>\n    <div class="action-container">\n      <button pButton type="button" label="Ok" class="ui-button-secondary"></button>\n      <button pButton type="button" label="Post" class="ui-button-secondary"></button>\n      <button pButton type="button" label="Reset" class="ui-button-secondary"></button>\n    </div>\n  ',styles:["\n    :host {\n      display: flex;\n      flex-direction: row;\n      flex: 1;\n    }\n    p-accordion {\n      flex: 1;\n      padding: 8px;\n    }\n    .action-container {\n      padding: 8px;\n      display: flex;\n      flex-direction: column;\n    }\n    button {\n      margin-top: 8px;\n    }\n    .ui-accordion-content {\n      height: 60vh;\n    }\n    "]}),a("design:paramtypes",["function"==typeof(s=void 0!==r.a&&r.a)&&s||Object])],c);var s},YWx4:function(t,e,n){"use strict";var o=n("3j3K"),r=n("5oXY"),i=n("wUn1"),a=(n.n(i),n("x0+n"));n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n){this.router=t,this.activatedRoute=e,this.dashboardService=n,this.navs=[{label:"Dashboard",routerLink:"/dashboard"},{label:"Tab2",routerLink:"/gcc-screen"}]}return t.prototype.ngOnInit=function(){var t=this;this.items=[{label:"Dashboard",routerLink:"/dashboard"}],this.activeItem=this.items[0],this.router.events.filter(function(t){return t instanceof r.NavigationEnd}).subscribe(function(e){var n=e.url;if("/"!==n){var o=t.navs.find(function(t){return t.routerLink===n});if(o)t.activateTab(o);else if(n.match(/post\/[0-9]*/).length>0){var r=n.split("/")[2];t.dashboardService.getUserName(parseInt(r)).subscribe(function(e){o={label:e+" Posts",routerLink:n},t.navs.push(o),t.activateTab(o)})}}})},t.prototype.activateTab=function(t){this.items.find(function(e){return e.routerLink===t.routerLink})||this.items.push(t),this.activeItem=t},t}();u=c([n.i(o.Component)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]}),s("design:paramtypes",["function"==typeof(p=void 0!==r.Router&&r.Router)&&p||Object,"function"==typeof(f=void 0!==r.ActivatedRoute&&r.ActivatedRoute)&&f||Object,"function"==typeof(d=void 0!==a.a&&a.a)&&d||Object])],u);var p,f,d},gyuo:function(t,e){t.exports='<p-dataList [value]="posts" [paginator]="true" [rows]="5">\n    <p-header>\n        Posts\n    </p-header>\n    <ng-template let-post pTemplate="item">\n        <div class="ui-grid ui-grid-responsive ui-fluid" style="font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;">\n            <div class="ui-grid-row">\n                <div class="ui-grid-col-12">\n                    <div class="ui-grid ui-grid-responsive ui-fluid">\n                        <div class="ui-grid-row" style="font-weight: bold">\n                            <div class="ui-grid-col-2" >Title: </div>\n                            <div class="ui-grid-col-10" style="font-style: italic">{{post.title}}</div>\n                        </div>\n                        <div class="ui-grid-row">\n                            <div class="ui-grid-col-2">Body: </div>\n                            <div class="ui-grid-col-10">{{post.body}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</p-dataList>'},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0,SERVER:"Angular2Demo"}},ko13:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=r([n.i(o.Component)({selector:"app-gcc-screen",template:"\n    <p>\n      Tab2 Works!\n    </p>\n  ",styles:[""]}),i("design:paramtypes",[])],a)},okgc:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".app-container{-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.app-container,.app-main{-webkit-box-flex:1;display:-webkit-box;display:-ms-flexbox;display:flex}.app-main{-ms-flex:1;flex:1}app-dashboard,app-header,app-navigation{padding:8px}app-header{color:#fff;font-size:15px;font-weight:400;background:#1976d2;box-shadow:0 2px 5px 0 rgba(0,0,0,.24)}app-navigation{background:rgba(236,239,241,.56);box-shadow:3px 0 6px rgba(0,0,0,.24)}app-dashboard{-ms-flex:1;flex:1}.tab-container,app-dashboard{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1}.tab-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;padding:8px}.tab-container>p-tabmenu{border-bottom:1px solid rgba(207,216,220,.56)}",""]),t.exports=t.exports.toString()},uvQH:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=r([n.i(o.Component)({selector:"app-navigation",template:'\n    <ul>\n      <li>\n        <a routerLink="/dashboard">Dashboard</a>\n      </li>\n      <li>\n        <a routerLink="/gcc-screen">Tab 2</a>\n      </li>\n    </ul>\n  ',styles:["ul { list-style: none; padding: 0px; }\n    li {     border-bottom: 1px solid rgba(207,216,220,0.56);\n    color: #607D8B;\n    margin: 0;\n    padding: 0;}\n    a {\n        box-sizing: border-box;\n        color: #607D8B;\n        display: block;\n        font-size: 13px;\n        font-weight: 400;\n        line-height: 47px;\n        text-decoration: none;\n        padding: 0 16px;\n        position: relative;\n        cursor: pointer;\n    }"]}),i("design:paramtypes",[])],a)},"x0+n":function(t,e,n){"use strict";var o=n("3j3K"),r=n("Fzro"),i=n("rCTf"),a=(n.n(i),n("+pb+")),c=(n.n(a),n("1APj"));n.n(c);n.d(e,"a",function(){return p});var s=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t){this.http=t,this.users=[],this.posts=[]}return t.prototype.fetchUserData=function(){var t=this;return this.users.length>0?i.Observable.of(this.users):this.http.get("https://jsonplaceholder.typicode.com/users").map(function(e){return t.users=e.json(),t.users})},t.prototype.getUserName=function(t){var e=this;if(0===this.users.length)return this.fetchUserData().map(function(n){return e.users.find(function(e){return e.id===t}).name});var n=this.users.find(function(e){return e.id===t});return i.Observable.of(n.name)},t.prototype.getPosts=function(t){var e=this,n="https://jsonplaceholder.typicode.com/posts?userId="+t;return this.posts.length>0&&this.posts[0].userId===t?i.Observable.of(this.posts):this.http.get(n).map(function(t){return e.posts=t.json(),e.posts})},t}();p=s([n.i(o.Injectable)(),u("design:paramtypes",["function"==typeof(f=void 0!==r.b&&r.b)&&f||Object])],p);var f},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("3j3K"),r=n("O61y"),i=n("Iksp");n("kZql").a.production&&n.i(o.enableProdMode)(),n.i(r.a)().bootstrapModule(i.a)}},[0]);