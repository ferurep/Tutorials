import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>multiple line from inline template.</h1> <p>multiple line</p>`,//'Single line. inline template',
  styleUrls: ['./app.component.scss'],
  //styles:[`h1{color:red;}`] inline style
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role='Admin';
}
