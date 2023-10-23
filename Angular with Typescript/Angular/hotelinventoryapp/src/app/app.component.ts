import { AfterViewInit, Component, ViewChild, ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import {RoomsComponent} from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>multiple line from inline template.</h1> <p>multiple line</p>`,//'Single line. inline template',
  styleUrls: ['./app.component.scss'],
  //styles:[`h1{color:red;}`] inline style
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role='Admin';

//when ViewChild is using at 'ngOnItit' set {static:true} 
@ViewChild('nameDiv', {static:true}) nameDiv!: ElementRef;

ngOnInit(){
 this.nameDiv.nativeElement.innerText ="Hilton Hotel"; 
}

  // @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   //this is how to load component dynamically
  //   const componentref = this.vcr.createComponent(RoomsComponent);
  //   componentref.instance.numberOfRooms= 50;
  // }
}
