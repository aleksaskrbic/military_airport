import { Component, OnInit } from '@angular/core';
import { FlyTerms } from '../model/flyterms';
import { TermsServiceService } from '../service/terms-service.service';
import { Router } from '@angular/router';
import { State } from '../model/state';
import { Airport } from '../model/airport';
import { AddFastTerms } from '../model/fastTerms';
import { Airplane } from '../model/airplane';
import { Pilot } from '../model/pilot';
import { RailWay } from '../model/railWay';
import { WeaponSystem } from '../model/weaponSystem';
import { Mechanic } from '../model/mechanic';
import { FlyControler } from '../model/flycontroler';
import { PilotServiceService } from '../service/pilot-service.service';
import { AirplaneService } from '../service/airplane.service';

@Component({
  selector: 'app-add-fly-term',
  templateUrl: './add-fly-term.component.html',
  styleUrls: ['./add-fly-term.component.css']
})
export class AddFlyTermComponent implements OnInit {

  newFlyTerm: FlyTerms;
  flyControler: FlyControler;
  controller_id: number;
  terms: FlyTerms[];
  placeholder = 'Унесите информације...';
  airplanes: Airplane[];
  lData: any[];
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

       id: 133,
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

     newFastTerm: AddFastTerms = new AddFastTerms
     ({
          start: '',
          end: '',
          duration: 0,
          pilot: this.pickPilot,
          airplane: this.pickAirplane,
          railWay: this.pickRailway
     })

  constructor(private termsService: TermsServiceService, private airplaneService: AirplaneService, 
    private router: Router, private pilotService: PilotServiceService) 
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
     this.findControllerById();
     this.viewAllPlanes();
     this.lData = this.airplanes;

  }

  viewAllPlanes()
  {
     this.airplaneService.getAllAirplanes()
     .subscribe(lData => this.airplanes = lData)
     this.lData = this.airplanes;

  }

  addFastFlyTerm()
  {
    console.log('ranko', this.newFastTerm)
    
    this.termsService.addFastTerm(this.newFastTerm)
    .subscribe(res => this.newFastTerm = res);

    alert("Успешно креиран нови термин за летење!");
    location.pathname = ('fly_calendar');
  }

  findControllerById()
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
