import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pilotSurvey } from '../model/pilotSurvey';
import { Observable } from 'rxjs';
import { mechanicSurvey } from '../model/mechanicSurvey';
import { ControllSurvey } from '../model/controll_survey';

@Injectable({
  providedIn: 'root'
})
export class PilotSurveyService 
{

  url1 = "http://localhost:8081/api/pilot_survey/save";
  url2 = "http://localhost:8081/api/pilot_survey";
 

  url11 = "http://localhost:8081/api/mechanic_survey/save";

  url15 = "http://localhost:8081/api/control_survey/save";
  url16 = "http://localhost:8081/api/control_survey/update"; 
  url17 =  "http://localhost:8081/api/control_surveys";

  constructor(private http: HttpClient) { }

  savePilotSurvey(newPilotSurvey: pilotSurvey): Observable<pilotSurvey>
  {
    return this.http.post<pilotSurvey>(this.url1,newPilotSurvey);
  }

  getPilotSurveyById(id:number): Observable<pilotSurvey>
  {
    return this.http.get<pilotSurvey> (`${this.url2}/${id}`)
  }

  //Deo za izvestaje mehanicare
  saveMechanicSurvey(newMechanicSurvey: mechanicSurvey): Observable<mechanicSurvey>
  {
    return this.http.post<mechanicSurvey>(this.url11,newMechanicSurvey);
  }
 
  //Deo za izvestaje za kontrolore Leta
  saveControllSurvey(newControlSurvey: ControllSurvey): Observable<ControllSurvey>
  {
    return this.http.post<ControllSurvey>(this.url15,newControlSurvey);
  }

  //Azuriranje Kolicine Goriva i Raketa
  UpdateRocket(controll_survey: ControllSurvey): Observable<ControllSurvey>
  {
    return this.http.post<ControllSurvey>(this.url16,controll_survey);
  }

  //Dobavi sve upitnike
  getAllControlSurveys(): Observable<ControllSurvey[]>
  {
    return this.http.get<ControllSurvey[]>(this.url17);
  }


}
