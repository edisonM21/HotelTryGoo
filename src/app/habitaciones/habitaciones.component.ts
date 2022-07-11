import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../servicio-prueba.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  public listahabitaciones:any[]=[]

  constructor( public servicio:ServicioPruebaService) {

    this.servicio.getHabitaciones().subscribe(respuesta=>{
      console.log(respuesta)
      this.listahabitaciones=respuesta.datos
    })
   }

  ngOnInit(): void {
  }

}
