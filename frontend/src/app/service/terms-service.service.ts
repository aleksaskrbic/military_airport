import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlyTerms } from '../model/flyterms';
import { AddFastTerms } from '../model/fastTerms';
import { scheduleTerm } from '../model/scheduleTerm';
import { mechanicTerm } from '../model/mechanicTerm';

@Injectable({
  providedIn: 'root'
})
export class TermsServiceService 
{

  url1 = "http://localhost:8081/api/pilot_terms";
  url2 = "http://localhost:8081/api/terms/sort-by-date";
  url3 = "http://localhost:8081/api/terms/sort-by-duration";
  url4 = "http://localhost:8081/api/terms/sort-by-coming";
  
  url5 = "http://localhost:8081/api/terms/addFastTerm";
  url6 = "http://localhost:8081/api/terms";
  url7 = "http://localhost:8081/api/terms/completed";
  url8 = "http://localhost:8081/api/terms/reservation";

  url9 = "http://localhost:8081/api/terms/schedule_term";
  url10 = "http://localhost:8081/api/terms/cancel_term";
  url11 = "http://localhost:8081/api/future_terms";
  url12 = "http://localhost:8081/api/term";

  url13 = "http://localhost:8081/api/terms/mechanic_term";

  

  
  constructor(private http: HttpClient) { }


  getAllTerms(): Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]>(this.url6);
  }

  getTermByID(id: number): Observable<FlyTerms>
  {
    return this.http.get<FlyTerms> (`${this.url12}/${id}`);
  }

  getTermsByPilot(id: number): Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]> (`${this.url1}/${id}`);
  }

  sortByDate() : Observable<FlyTerms[]>
  {
    //return this.http.get<FlyTerms[]> (`${this.url2}/${id}`);
    return this.http.get<FlyTerms[]> (this.url2);
  }

  sortByDuration() : Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]> (this.url3);
  }

  sortByComing() : Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]> (this.url4);
  }

  addFastTerm(fastTerms: AddFastTerms): Observable<AddFastTerms>
  {
    console.log('marko', fastTerms);
    return this.http.put<AddFastTerms>(this.url5, fastTerms);
  }

  getAllCompletedTerms(): Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]>(this.url7);
  }

  getAllFreeTerms(): Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]>(this.url8);
  }

  getFutureTermsByPilot(id: number): Observable<FlyTerms[]>
  {
    return this.http.get<FlyTerms[]> (`${this.url11}/${id}`);
  }

  scheduleTerm(schedule_term: scheduleTerm): Observable<FlyTerms>
  {
    console.log('marko', schedule_term);
    return this.http.put<FlyTerms>(this.url9, schedule_term);
  }

  cancelTerm(schedule_term:scheduleTerm): Observable<FlyTerms>
  {
    console.log('marko', schedule_term);
    return this.http.put<FlyTerms>(this.url10, schedule_term);
  }

  giveMechanicTerm(mechanic_term: mechanicTerm): Observable<FlyTerms>
  {
     console.log('marko', mechanic_term);
     return this.http.put<FlyTerms>(this.url13, mechanic_term);

  }

  


  





}
