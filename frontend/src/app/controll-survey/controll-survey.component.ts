import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../model/mechanic';
import { Pilot } from '../model/pilot';
import { Airplane } from '../model/airplane';
import { Airport } from '../model/airport';
import { State } from '../model/state';
import { WeaponSystem } from '../model/weaponSystem';
import { mechanicSurvey } from '../model/mechanicSurvey';
import { ControllSurvey } from '../model/controll_survey';
import { FlyTerms } from '../model/flyterms';
import { pilotSurvey } from '../model/pilotSurvey';
import { RailWay } from '../model/railWay';
import { PilotServiceService } from '../service/pilot-service.service';
import { PilotSurveyService } from '../service/pilot-survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';
import { EMPTY, windowToggle } from 'rxjs';
import { FlyControler } from '../model/flycontroler';

@Component({
  selector: 'app-controll-survey',
  templateUrl: './controll-survey.component.html',
  styleUrls: ['./controll-survey.component.css']
})
export class ControllSurveyComponent implements OnInit {

  mechanic: Mechanic;
  pilot: Pilot;
  flyController: FlyControler;
  airplane: Airplane;
  flyTerm: FlyTerms;
  controllSurvey: ControllSurvey;
  mechanic_id: number;
  pilot_id: number;
  controller_id: number;
  id: number;
  mustfill = false;
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
    private termsService: TermsServiceService,private router: Router, private route: ActivatedRoute) 
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
      this.findFlyTerm();
      this.findFlyController();
  }

  findFlyController()
  {
    this.controller_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getControllerById(this.controller_id)
    .subscribe(res => this.flyController = res)
  }


  findFlyTerm()
  {
    this.id = this.route.snapshot.params['id'];
    this.termsService.getTermByID(this.id)
    .subscribe(res => {this.flyTerm = res;
    
      //this.controllSurvey.flyTerm = this.flyTerm;
      this.pickControllSurvey.flyTerm = this.flyTerm;
      
      /*if(this.flyTerm.completedTerm == true)
      {
        location.pathname = ('stuff_pilot_profile/' + this.flyTerm.pilot.id);
        alert("КРЕИРАН ЈЕ ИЗВЕШТАЈ О ПОСТОЈЕЋЕМ ЛЕТУ! НЕОДОБРЕН ПРИСТУП!")
      }*/
      
      
      /*if(this.flyTerm.pilotSurvey.pilot_Approved == false)
      {
        location.pathname = ('stuff_pilot_profile/' + this.flyTerm.pilot.id);
        alert("ПИЛОТУ НИЈЕ ОДОБРЕН ЛЕТ! Покуштајте касније!")
        this.Save1();
      }*/

      if((this.flyTerm.mechanicSurvey == null) && (this.flyTerm.pilotSurvey.pilot_Approved == true))
      {
        location.pathname = ('stuff_pilot_profile/' + this.flyTerm.pilot.id);
        alert("МЕХАНИЧАР НИЈЕ УТВРДИО ИСПРАВНОСТ АВИОНА ПРЕ ЛЕТА!")
        location.pathname = ('login')

      }

     /* if(this.flyTerm.mechanicSurvey.mechanic_approved == false)
      {
        location.pathname = ('stuff_pilot_profile/' + this.flyTerm.pilot.id);
        alert("АВИОН НИЈЕ У СТАЊУ ЗА ЛЕТ!")
        this.Save1();


      }*/

    
    })

    

  

  }

  Save1()
  {
    this.pilotSurveyService.saveControllSurvey(this.pickControllSurvey)
    .subscribe(res => this.controllSurvey = res);
  }

  Save()
  {
      //this.controllSurvey.id = this.pickControllSurvey.id;

      if(this.pickControllSurvey.mission_type == '')
      {
        //this.mustfill = true;
        this.mustfill = false;
        
      }
      else if(this.pickControllSurvey.mission_success == '')
      {
        //this.mustfill = true;
        this.mustfill = false;
      }

      if(this.mustfill == false)
      {
        this.pilotSurveyService.saveControllSurvey(this.pickControllSurvey)
        .subscribe(res => this.controllSurvey = res);

        alert("Успешно је сачуван извештај о лету!")
      }
      else
      {
        alert("Нисте попунили обавезна поља, ИЗВЕШТАЈ НЕ МОЖЕ БИТИ САЧУВАН!")
        window.location.reload();
      }


  }

  Apdejt(controllSurvey: ControllSurvey)
  {
       console.log('marko',controllSurvey)
       this.pilotSurveyService.UpdateRocket(this.controllSurvey)
      .subscribe()
      alert("Ажуриран је извештај и количина опреме!")
      location.pathname = ('all_reports')
  }

}
