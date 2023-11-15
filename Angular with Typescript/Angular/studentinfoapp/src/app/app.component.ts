import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'stuinfoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private frmBuilder: FormBuilder) { }

  loginfromgroup = this.frmBuilder.group({
    userName : ['',Validators.required],
    password :  ['',Validators.required],
  });


  loginBtn(){
    console.warn(this.loginfromgroup.value);
  }
}
