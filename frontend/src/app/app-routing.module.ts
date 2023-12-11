import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllPlanesComponent } from './all-planes/all-planes.component';
import { PilotProfileComponent } from './pilot-profile/pilot-profile.component';
import { AllPilotsComponent } from './all-pilots/all-pilots.component';
import { PlaneProfileComponent } from './plane-profile/plane-profile.component';
import { NewPlaneComponent } from './new-plane/new-plane.component';
import { RegPilotComponent } from './reg-pilot/reg-pilot.component';
import { AirportProfileComponent } from './airport-profile/airport-profile.component';
import { AddFlyTermComponent } from './add-fly-term/add-fly-term.component';
import { FlyCalendarComponent } from './fly-calendar/fly-calendar.component';
import { SchedulingTermsComponent } from './scheduling-terms/scheduling-terms.component';
import { FutureTermsComponent } from './future-terms/future-terms.component';
import { PQuestionaryComponent } from './p-questionary/p-questionary.component';
import { MQuestionaryComponent } from './m-questionary/m-questionary.component';
import { StuffPilotProfileComponent } from './stuff-pilot-profile/stuff-pilot-profile.component';
import { ControllSurveyComponent } from './controll-survey/controll-survey.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { StuffProfileComponent } from './stuff-profile/stuff-profile.component';
import { MechanicPlanesComponent } from './mechanic-planes/mechanic-planes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: 'all_planes', component: AllPlanesComponent },
  {path: 'pilot_profile/:id', component: PilotProfileComponent },
  {path: 'all_pilots', component: AllPilotsComponent},
  {path: 'plane_profile/:id', component: PlaneProfileComponent},
  {path: 'new_plane', component: NewPlaneComponent},
  {path: 'new_pilot', component: RegPilotComponent},
  {path: 'airport_profile/:id', component: AirportProfileComponent},
  {path: 'add_fly_term', component: AddFlyTermComponent},
  {path: 'fly_calendar', component: FlyCalendarComponent},
  {path: 'schedule_terms', component: SchedulingTermsComponent},
  {path: 'future_terms/:id', component: FutureTermsComponent},
  {path: 'pilot_survey/:id', component: PQuestionaryComponent},
  {path: 'mechanic_survey/:id', component: MQuestionaryComponent},
  {path: 'stuff_pilot_profile/:id', component: StuffPilotProfileComponent},
  {path: 'controll_survey/:id', component: ControllSurveyComponent},
  {path: 'all_reports', component: AllReportsComponent},
  {path: 'stuff_profile', component: StuffProfileComponent},
  {path: 'mechanic_planes', component: MechanicPlanesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
