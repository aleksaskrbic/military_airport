import { Component, OnInit } from '@angular/core';
import { ControllSurvey } from '../model/controll_survey';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';
import { PilotSurveyService } from '../service/pilot-survey.service';
import { State } from '../model/state';
import { Airport } from '../model/airport';
import { WeaponSystem } from '../model/weaponSystem';
import { Mechanic } from '../model/mechanic';
import { Airplane } from '../model/airplane';
import { Pilot } from '../model/pilot';
import { RailWay } from '../model/railWay';
import { pilotSurvey } from '../model/pilotSurvey';
import { mechanicSurvey } from '../model/mechanicSurvey';
import { FlyTerms } from '../model/flyterms';
import { FlyControler } from '../model/flycontroler';
import { PilotServiceService } from '../service/pilot-service.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {

  flyControler: FlyControler;
  controller_id: number;

  controllSurvey: ControllSurvey;
  controllSurveys:ControllSurvey[];


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

   pickPilot: Pilot = new Pilot
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
       role: "Pilot",
       cin: "",
       points: 0,
       airport: this.pickAirport
   })

   pickRailway: RailWay = new RailWay
    ({
        id: 0,
        strip_mark: "",
        planes_on_strip: 0,
        airplanes_on_strip: [],
        airport: this.pickAirport
     })

     pickpilotSurvey = new pilotSurvey
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
          pilot: this.pickPilot,
          pilot_Approved: false
   })

   pickmechanicSurvey = new mechanicSurvey
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


   pickFlyTerm: FlyTerms = new FlyTerms
   ({
          id: 0,
          start: new Date,
          end: new Date,
          duration: 0,
          pilotCome: false,
          freeTerm: false,
          mechanic_approved: false,
          completedTerm: false,
          pilot: this.pickPilot,
          airplane: this.pickAirplane,
          railWay: this.pickRailway,
          pilotSurvey: this.pickpilotSurvey,
          mechanicSurvey: this.pickmechanicSurvey

   })

   
   

    pickControllSurvey: ControllSurvey = new ControllSurvey
    ({
        id: 0,
        number_of_rockets: 0,
        rocket_type: "",
        road_length: 0,
        fuel_used: 0,
        mission_type: "",
        mission_success: "",
        extra_note: "",
        plane_damage: "",
        mission_goal: "",
        flyTerm: this.pickFlyTerm,
        pilotSurvey: this.pickpilotSurvey,
        mechanicSurvey: this.pickmechanicSurvey
    })

  constructor(private route: ActivatedRoute, private router: Router, private termsService: TermsServiceService,
    private pilotSurveyService: PilotSurveyService, private pilotService: PilotServiceService) 
  {  

    this.flyControler = new FlyControler
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
         role: "FlyControler",
         airport: this.pickAirport
    })

  }

  ngOnInit(): void 
  {
     this.viewAllTerms();
     this.findControllerByID();
  }

  viewAllTerms()
  {
     this.pilotSurveyService.getAllControlSurveys()
     .subscribe(res => this.controllSurveys = res)
  }

  findControllerByID()
  {
    this.controller_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getControllerById(this.controller_id)
    .subscribe(res => this.flyControler = res)
  }

  Back()
  {
    location.pathname = ('stuff_profile')
  }

}
