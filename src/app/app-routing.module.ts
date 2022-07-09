import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitacionesService } from './habitaciones/habitaciones.service';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import { HabitacionesComponent } from './habitaciones/habitaciones.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'habitaciones',
    component:HabitacionesComponent
  },
  {
    path:'Home',
    component:HomeComponent,
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
