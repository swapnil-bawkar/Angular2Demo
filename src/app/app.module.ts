import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GccScreenComponent } from './gcc-screen/gcc-screen.component';
import { McaGridComponent } from './dashboard/mca-grid/mca-grid.component';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    DashboardComponent,
    GccScreenComponent,
    McaGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule, AccordionModule, ButtonModule, DataTableModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
