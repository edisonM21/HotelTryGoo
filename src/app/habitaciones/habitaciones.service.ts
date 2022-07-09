import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http'

@Injectable()
export class HabitacionesService{
    private API_SERVER="https://apiglobant1.herokuapp.com/api/v1/habitaciones/"

    constructor(public http:HttpClient){}

    public getHabitaciones():Observable<any>{
        return this.http.get(this.API_SERVER);
    }
}