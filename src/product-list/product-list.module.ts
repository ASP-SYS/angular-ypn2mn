import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

 import { ProductMasterComponent }from'../product-master/product-master.component';
import { ProductListComponent } from '../product-list/product-list.component';
// import { ProductListAlertComponent } from '../src/app/product-list/product-list-alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  exports:[],
   bootstrap:    [ ProductListComponent ]
})
export class ProductListModule { }