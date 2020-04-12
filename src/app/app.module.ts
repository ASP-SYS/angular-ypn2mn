import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from'../product-list/product-list.component';
import { ProductMasterComponent }from'../product-master/product-master.component';
import { ProductListAlertComponent } from'../product-list/product-list-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule
  // ,RouterModule.forRoot([
  //     { path: '', component: ProductListComponent },
  //     { path: 'products/:productId', component: ProductDetailsComponent } ])
  ],
  declarations: [  HelloComponent,
  AppComponent,
  ProductListComponent,
  ProductMasterComponent,
  ProductListAlertComponent,
  ProductDetailsComponent ],
  bootstrap:    [ ProductListComponent ]
})
export class AppModule { }


 

