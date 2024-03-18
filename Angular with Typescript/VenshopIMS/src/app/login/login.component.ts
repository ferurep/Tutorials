import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vsims-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
userName: string='';
password: string='';

ngOnInit(): void {
  
}

Loginfnc(){
  if(this.userName==="admin" && this.password==="admin"){
    alert("login success");
  }
}

}
