import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello Templet :- {{name}}</h1>`,
  styles: [`h3 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
 
}
