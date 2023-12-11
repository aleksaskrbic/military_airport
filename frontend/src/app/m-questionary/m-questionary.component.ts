import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../model/mechanic';
import { State } from '../model/state';
import { Airport } from '../model/airport';
import { Airplane } from '../model/airplane';
import { mechanicSurvey } from '../model/mechanicSurvey';
import { PilotServiceService } from '../service/pilot-service.service';
import { PilotSurveyService } from '../service/pilot-survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WeaponSystem } from '../model/weaponSystem';
import { AirplaneService } from '../service/airplane.service';
import { TermsServiceService } from '../service/terms-service.service';
import { FlyTerms } from '../model/flyterms';
import { mechanicTerm } from '../model/mechanicTerm';

@Component({
  selector: 'app-m-questionary',
  templateUrl: './m-questionary.component.html',
  styleUrls: ['./m-questionary.component.css']
})
export class MQuestionaryComponent implements OnInit {

  mechanic: Mechanic;
  mechanic_id: number;
  plane_id: number;
  id: number;
  mustfill = false;
  placeholder = 'Унесите информације';
  airplane : Airplane;
  flyTerm: FlyTerms;

  pickState: State = new State
  ({
     id: 0,
     state_mark: "",
     state_name: "",
     listOfAirports: []
   })

   pickAirport: Airport = new Airport
   ({   
        id: 0,
        airport_mark: "",
        airport_name: "",
        city: "",
        location: "",
        number_of_planes: 0,
        number_of_stuff:0,
        listOfPilots: [],
        listOfFlyControlers: [],
        state: this.pickState
   })

   pickWeaponSystem: WeaponSystem = new WeaponSystem
   ({
         id: 0,
         system_name : "",
         number_of_rockets: 0,
         rocket_type : ""
   })

   pickMechanic: Mechanic = new Mechanic
   ({

       id: 0,
       username: "",
       password: "",
       email: "",
       firstName: "",
       lastName: "",
       mobile: "",
       state: "",
       city: "",
       adress: "",
       profession: "",
       organizationInformation: "",
       enabled: true,
       role: "Mechanic",
       cin: "",
       points: 0,
       airport: this.pickAirport
   })

   pickAirplane: Airplane = new Airplane
   ({
        id: 0,
        registrationMark: "",
        airplane_name: "",
        airplaneType: "",
        seat_number: 0,
        airport: this.pickAirport,
        maximum_speed: 0,
        length_wings: 0,
        pogon: "",
        maximum_high: 0,
        tactical_radius: 0,
        rocket_radius: 0,
        fuel_reserve: 0,
         enabled: true,
         weaponSystem: this.pickWeaponSystem,
         mechanic: this.pickMechanic
   })

  



   mechanicSurvey = new mechanicSurvey
   ({
          id: 0,
          email: "",
          firstName: "",
          lastName: "",
          mobile: "",
          adress: "",
          city: "",
          state: "",
          p1: "",
          p2: "",
          p3: "",
          p4: "",
          p5: "",
          p6: "",
          p7: "",
          p8: "",
          mechanic: this.pickMechanic,
          airplane: this.pickAirplane,
          mechanic_approved: false
   })

      mechanicTerm: mechanicTerm = new mechanicTerm
      ({
                   flyTermId: 0,
                   mechanicSurveyId: 0
      })



   constructor(private pilotService: PilotServiceService, private router: Router, private route: ActivatedRoute,
    private pilotSurveyService: PilotSurveyService, private airplaneService: AirplaneService, private termsService: TermsServiceService)  
    { }

  ngOnInit(): void 
  {
    this.findMechanicByID();
   // this.findPlaneByID();
   this.findTermById();
  }

  findMechanicByID()
  {
    this.mechanic_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getMechanicById(this.mechanic_id)
    .subscribe(res => this.mechanic = res)
  }

  findPlaneByID()
  {
    this.id= this.route.snapshot.params['id'];

    this.airplaneService.getPlaneById(this.id)
    .subscribe(res =>this.airplane = res)
  }

  findTermById()
  {
    this.id = this.route.snapshot.params['id'];
    this.termsService.getTermByID(this.id)
    .subscribe(res => this.flyTerm = res)
  }

  Save()
  {
    this.mechanicSurvey.mechanic.id = Number(this.mechanic_id);
    console.log(this.mechanicSurvey)
    this.pilotSurveyService.saveMechanicSurvey(this.mechanicSurvey)
    .subscribe();
    alert("Успешно је сачуван захтев за проверу исправности авиона!")

    
  }

  GiveTermToMechanist()
  {
    console.log('marko', this.mechanicTerm)
    this.mechanicTerm.flyTermId = this.route.snapshot.params['id'];
    this.mechanicTerm.mechanicSurveyId = this.route.snapshot.params['id'];

    this.termsService.giveMechanicTerm(this.mechanicTerm)
    .subscribe(res => this.flyTerm = res);
    alert("МЕХАНИЧАР ЈЕ ПОТВРДИО ИСПРАВНОСТ АВИОНА ЗА ЛЕТ!")
    location.pathname = ('plane_profile/' + this.flyTerm.id)

  //  location.pathname = ('pilot_profile/' + this.flyTerm.pilot.id);

    
  }



}
