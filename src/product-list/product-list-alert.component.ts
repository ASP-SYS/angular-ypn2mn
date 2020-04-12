import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list-alert',
  templateUrl: './product-list-alert.component.html',
  styleUrls: ['./product-list-alert.component.css']
})
export class ProductListAlertComponent implements OnInit {
@Input() Product;
 @Output() getdetail = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
message(data:any)
{
  alert(data);
}
}