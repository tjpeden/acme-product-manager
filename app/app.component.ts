import {Component} from '@angular/core';

@Component({
  selector: 'acme-app',
  template: '<div><h1>{{title}}</h1><p>My first component!</p></div>'
})

export class AppComponent {
  title: string = "Acme Product Management";
}
