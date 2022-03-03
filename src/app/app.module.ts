import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { StockComponent } from './stock/stock.component';
import { PartnersComponent } from './partners/partners.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TitleComponent } from './layout/title/title.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { EmployeesComponent } from './layout/content/tables/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LoginComponent,
    SalesComponent,
    StockComponent,
    PartnersComponent,
    OrdersComponent,
    ProductsComponent,
    HomeComponent,
    TitleComponent,
    ToolbarComponent,
    ContentComponent,
    FooterComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
