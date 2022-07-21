import { Component, OnInit } from '@angular/core';
import { Auth } from '@firebase/auth';
import { ServicesAuthService } from '../services-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  usuario = {
    nombre:'',
    password:''
  }

  constructor(private authService: ServicesAuthService) { }

  ingresar(){
    const {nombre, password}= this.usuario;
    this.authService.login(nombre,password).then(res=>{
      console.log("se registro", res);
    })
  }
  ingresarConGoogle(){
    console.log(this.usuario)
    const {nombre, password}= this.usuario;
    this.authService.loginGoogle(nombre,password).then(res=>{
      console.log("se registro", res);
    })
  }


  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
