import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vsims-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
userName: string='';
password: string='';

constructor(private route: Router){}

ngOnInit(): void {}

Loginfnc(){
  if(this.userName==="admin" && this.password==="admin"){
    this.route.navigate(['/home']);
  }
  else{
    alert('invalid username or password');
  }
}

}
