import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservasComponent } from './reservas/reservas.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'habitaciones',
    component:HabitacionesComponent
  },
  {
    path:'Login',
    component:LoginComponent,
    pathMatch:'full'
  }, 
  {
    path:'Register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
