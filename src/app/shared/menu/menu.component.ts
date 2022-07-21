import { Component, OnInit, HostListener } from '@angular/core';
import { ServicesAuthService } from 'src/app/services-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLogged=this.authService.getUserlogged();
  constructor(private authService: ServicesAuthService) { }

  usuario = {
    nombre:'',
    password:''
  }

  logout(){
    this.authService.logout();
  }
  ingresarConGoogle(){
    console.log(this.usuario)
    const {nombre, password}= this.usuario;
    this.authService.loginGoogle(nombre,password).then(res=>{
      console.log("se registro", res);
    })
  }

  ngOnInit(): void {}

}
