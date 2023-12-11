import { Component, OnInit } from '@angular/core';
import { Pilot } from '../model/pilot';
import { Mechanic } from '../model/mechanic';
import { FlyControler } from '../model/flycontroler';
import { ControllSurvey } from '../model/controll_survey';
import { FlyTerms } from '../model/flyterms';
import { mechanicSurvey } from '../model/mechanicSurvey';
import { pilotSurvey } from '../model/pilotSurvey';
import { RailWay } from '../model/railWay';
import { Airplane } from '../model/airplane';
import { WeaponSystem } from '../model/weaponSystem';
import { Airport } from '../model/airport';
import { State } from '../model/state';
import { PilotServiceService } from '../service/pilot-service.service';
import { PilotSurveyService } from '../service/pilot-survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';

@Component({
  selector: 'app-stuff-profile',
  templateUrl: './stuff-profile.component.html',
  styleUrls: ['./stuff-profile.component.css']
})
export class StuffProfileComponent implements OnInit {

  pilot: Pilot;
  mechanic: Mechanic;
  flyController: FlyControler;
  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
  controller_id: number;
  term_id: number;
  placeholder = 'Унесите информације';

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
  

  constructor(private pilotService: PilotServiceService, private pilotSurveyService: PilotSurveyService,
    private router: Router, private route: ActivatedRoute, private termsService: TermsServiceService ) 
    { 
      this.flyController = new FlyControler
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
    this.findFlyController();
    this.findFlyTerm();
    this.viewTerms();
  }

  findFlyController()
  {
    this.controller_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getControllerById(this.controller_id)
    .subscribe(res => this.flyController = res)
  }

  findFlyTerm()
  {
    console.log('marko', this.flyTerm)

    this.term_id = 1;
    this.termsService.getTermByID(this.term_id)
    .subscribe(res => {this.flyTerm = res;
    
         this.pickFlyTerm = this.flyTerm;
    
    })
  }

  viewTerms()
  {
     this.termsService.getAllTerms()
     .subscribe(res => this.flyTerms = res)
  }

  PilotProfile(id: number)
  {
    location.pathname = ('stuff_pilot_profile/' + id);
  }

  PlaneProfile(id:number)
  {
    location.pathname = ('plane_profile/' + id);
  }


  //Dugmad
  AllReports()
  {
     location.pathname = ('all_reports')
  }

  FlyCalendar()
  {
     location.pathname = ('fly_calendar')
  }

  NewFly()
  {
     location.pathname = ('add_fly_term')
  }

  AllPilots()
  {
     location.pathname = ('all_pilots')
  }

  NewPilot()
  {
     location.pathname = ('new_pilot')
  }

  NewPlane()
  {
     location.pathname = ('new_plane')
  }

}

