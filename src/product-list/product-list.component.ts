import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductListAlertComponent } from 'src/product-list/product-list-alert/ProductListAlertComponent';

@Component({
    selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   @Input() products:any= 
    [{
  name: 'Phone xl',
  serial: 'X1Ph123',
  price:'120.10',
  model:'X1'
}, {
  name: 'Phone Stand',
  serial: 'stph0475',
  price:'220',
  model:'PS'
}
, {
  name: 'phone base',
  serial: 'bsph06876',
  price:'320.10',
  model:'PB'
}
, {
  name: 'Phone Mini',
  serial: 'laph0458968',
  price:'720.10',
  model:'PM'
}];


  ngOnInit() {
   
  }

  Price(price) {
    window.alert('The product has been shared!'+price);
  }
  getalert()
  {
    window.alert('output alert');
  }

}