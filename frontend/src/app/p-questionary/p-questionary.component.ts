import { Component, OnInit } from '@angular/core';
import { Pilot } from '../model/pilot';
import { State } from '../model/state';
import { Airport } from '../model/airport';
import { Airplane } from '../model/airplane';
import { pilotSurvey } from '../model/pilotSurvey';
import { PilotServiceService } from '../service/pilot-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PilotSurveyService } from '../service/pilot-survey.service';
import { WeaponSystem } from '../model/weaponSystem';
import { Mechanic } from '../model/mechanic';
import { scheduleTerm } from '../model/scheduleTerm';
import { TermsServiceService } from '../service/terms-service.service';
import { FlyTerms } from '../model/flyterms';

@Component({
  selector: 'app-p-questionary',
  templateUrl: './p-questionary.component.html',
  styleUrls: ['./p-questionary.component.css']
})
export class PQuestionaryComponent implements OnInit {

  pilot: Pilot;
  pilot_id: number;
  flyTerm: FlyTerms;
  term_id: number;
  pilotSurvey : pilotSurvey;
  mustfill = false;
  placeholder = 'Унесите информације';

  scheduleTerm: scheduleTerm = new scheduleTerm
  ({
            flyTermId :0,
            pilotId: 0,
            pilotSurveyId: 0
  })


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


  constructor(private pilotService: PilotServiceService, private router: Router, private route: ActivatedRoute,
              private pilotSurveyService: PilotSurveyService, private termsService: TermsServiceService) 
  { }

  ngOnInit(): void 
  {
     this.findPilotByID();
  }

  findPilotByID()
  {
    this.pilot_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getPilotById(this.pilot_id)
    .subscribe(res => this.pilot = res)
    
  }

  Save()
  {
    this.pickpilotSurvey.pilot.id = Number(this.pilot_id);
    console.log(this.pickpilotSurvey)
    
    this.pilotSurveyService.savePilotSurvey(this.pickpilotSurvey)
    .subscribe(res => this.pickpilotSurvey = res);
    
    alert("Успешно је сачуван захтев за нови лет!")

    }

    findPilotSurveyByID()
    {
      //this.term_id = this.route.snapshot.params['id'];
      this.pilotSurveyService.getPilotSurveyById(this.term_id)
      .subscribe( res => this.pickpilotSurvey = res)
      this.ScheduleTerm();
    }

      ScheduleTerm()
    {
        console.log('marko',this.scheduleTerm)
        this.scheduleTerm.flyTermId = this.route.snapshot.params['id'];
        this.scheduleTerm.pilotId = Number(this.pilot.id);
        this.scheduleTerm.pilotSurveyId = this.pickpilotSurvey.id;

        this.termsService.scheduleTerm(this.scheduleTerm)
       .subscribe(res => this.flyTerm = res);
        alert("Потврђен је захтев за Нови Лет!")

        location.pathname = ('pilot_profile/' + this.pilot.id);
   
    }

 

}
