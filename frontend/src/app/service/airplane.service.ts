import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airplane } from '../model/airplane';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService 
{

  url1 = "http://localhost:8081/api/airplanes";
  url2 = "http://localhost:8081/api/sort/planes";
  url3 = "http://localhost:8081/api/airport";
  url4 = "http://localhost:8081/api/sort/planes/mark";
  url5 = "http://localhost:8081/api/sort/planes/system";
  url6 = "http://localhost:8081/api/airplane";

  constructor(private http: HttpClient) { }

  
  //Prikaz informacija o aerodromu
  getAirportById(id:number): Observable<Airport>
  {
    return this.http.get<Airport> (`${this.url3}/${id}`)
  } 

  getAllAirplanes(): Observable<Airplane[]>
  {
    return this.http.get<Airplane[]>(this.url1);
  }

  getPlaneById(id:number): Observable<Airplane>
  {
    return this.http.get<Airplane> (`${this.url6}/${id}`)
  }

  getAllPlanesSortByType():Observable<Airplane[]>
  {
    return this.http.get<Airplane[]>(this.url2);
  }

  getAllPlanesSortByMark():Observable<Airplane[]>
  {
    return this.http.get<Airplane[]>(this.url4);
  }

  getAllPlanesSortBySystem():Observable<Airplane[]>
  {
    return this.http.get<Airplane[]>(this.url5);
  }



 


}
