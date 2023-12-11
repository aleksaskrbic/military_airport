import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../model/pilot';
import { Mechanic } from '../model/mechanic';
import { FlyTerms } from '../model/flyterms';
import { FlyControler } from '../model/flycontroler';

@Injectable({
  providedIn: 'root'
})
export class PilotServiceService 
{

  url1 = "http://localhost:8081/api/pilot";
  url2 = "http://localhost:8081/api/airport_pilots";
  url3 = "http://localhost:8081/api/pilots";
  
  url13 = "http://localhost:8081/api/controller";
  
  
  url33 = "http://localhost:8081/api/mechanic";
  url34 = "http://localhost:8081/api/addPenal";
  url35 = "http://localhost:8081/api/term/edit";
 

  constructor(private http: HttpClient) { }


  getPilotById(id:number): Observable<Pilot>
  {
    return this.http.get<Pilot> (`${this.url1}/${id}`)
  }

  UpdatePilot(pilot: Pilot):Observable<Pilot>
  {
      return this.http.put<Pilot>(this.url1+"/edit",pilot);
  }

  getPilotByAirportId(id: number): Observable<Pilot[]>
  {
    return this.http.get<Pilot[]> (`${this.url2}/${id}`);
  }

  getAllPilots(): Observable<Pilot[]>
  {
    return this.http.get<Pilot[]>(this.url3);
  }

  //OVAJ DEO SE KORISTI ZA KONTROLORE LETOVA
  UpdateFlyTerm(flyTerm: FlyTerms):Observable<FlyTerms>
  {
      return this.http.put<FlyTerms>(this.url35,flyTerm);
  }

  AddPenal(flyTerm: FlyTerms):Observable<FlyTerms>
  {
      return this.http.post<FlyTerms>(this.url34,flyTerm);
  }

  //Izvlacenje Kontrolora Letova
  getControllerById(id:number): Observable<FlyControler>
  {
    return this.http.get<FlyControler> (`${this.url13}/${id}`)
  }

 

  //OVAJ DEO CE SE KORISTITI ZA MEHANICARE
  getMechanicById(id:number): Observable<Mechanic>
  {
    return this.http.get<Mechanic> (`${this.url33}/${id}`)
  }
  
}
