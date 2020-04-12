import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from'../product-list/product-list.component';
import { ProductMasterComponent }from'../product-master/product-master.component';
import { ProductListAlertComponent } from'../product-list/product-list-alert.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule

  ],
  declarations: [  HelloComponent,
  AppComponent,
  ProductListComponent,
  ProductMasterComponent,
  ProductListAlertComponent
  ],
  bootstrap:    [ProductListComponent]
})
export class AppModule { }


 

