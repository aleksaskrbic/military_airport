import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AllPlanesComponent } from './all-planes/all-planes.component'; 
import {DataTablesModule} from 'angular-datatables';
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
//import {FlxUiDatatableModule, FlxUiDataTable} from 'flx-ui-datatable';
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent,
    NavbarHomeComponent,
    QuestionnaireComponent,
    AllPlanesComponent,
    PilotProfileComponent,
    AllPilotsComponent,
    PlaneProfileComponent,
    NewPlaneComponent,
    RegPilotComponent,
    AirportProfileComponent,
    AddFlyTermComponent,
    FlyCalendarComponent,
    SchedulingTermsComponent,
    FutureTermsComponent,
    PQuestionaryComponent,
    MQuestionaryComponent,
    StuffPilotProfileComponent,
    ControllSurveyComponent,
    AllReportsComponent,
    StuffProfileComponent,
    MechanicPlanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DataTablesModule,
    MatRadioModule,
    IgxComboModule
    //FlxUiDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
