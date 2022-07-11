import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {
  
  constructor(public peticion:HttpClient) {
    console.log("arrancando el servicio")
   }

   getHabitaciones():Observable<any>{
    return this.peticion.get('https://apiglobant1.herokuapp.com/api/v1/habitaciones');
  }
}
