import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Airplane } from '../model/airplane';
import { Pilot } from '../model/pilot';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  url="http://localhost:8081/api/registration";
  url1 = "http://localhost:8081/api/users";
  url2 = "http://localhost:8081/api/registration/plane";
  url3 = "http://localhost:8081/api/registration/pilot";
  url4 =  "http://localhost:8081/api/user";

  constructor(private http:HttpClient) {}
   
  /*getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.url1);
  }*/
  
  registration(newUser:User):Observable<User>
  {
    return this.http.post<User>(this.url,newUser);
  }

  RegistrationNewPlane(newPlane: Airplane): Observable<Airplane>
  {
    return this.http.post<Airplane>(this.url2, newPlane);
  }

  RegistrationNewPilot(newPilot: Pilot): Observable<Pilot>
  {
    return this.http.post<Pilot>(this.url3, newPilot);

  }

  getUserById(id:number): Observable<User>
  {
    return this.http.get<User> (`${this.url4}/${id}`)
  } 

}
