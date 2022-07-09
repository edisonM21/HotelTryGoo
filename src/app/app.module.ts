import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormularioReservasComponent } from './formulario-reservas/formulario-reservas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InformacionComponent } from './informacion/informacion.component';
import { HabitacionesService } from './habitaciones/habitaciones.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    FormularioReservasComponent,
    ReservasComponent,
    InformacionComponent,
    HabitacionesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    HabitacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
