import { Component, OnInit } from '@angular/core';
import { Pilot } from '../model/pilot';
import { FlyTerms } from '../model/flyterms';
import { FlyControler } from '../model/flycontroler';
import { ActivatedRoute, Router } from '@angular/router';
import { PilotServiceService } from '../service/pilot-service.service';
import { TermsServiceService } from '../service/terms-service.service';
import { State } from '../model/state';
import { Airport } from '../model/airport';
import { Airplane } from '../model/airplane';
import { pilotSurvey } from '../model/pilotSurvey';
import { WeaponSystem } from '../model/weaponSystem';
import { Mechanic } from '../model/mechanic';

@Component({
  selector: 'app-stuff-pilot-profile',
  templateUrl: './stuff-pilot-profile.component.html',
  styleUrls: ['./stuff-pilot-profile.component.css']
})
export class StuffPilotProfileComponent implements OnInit {

  id: number;
  pilot: Pilot;
  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
  flyController: FlyControler;

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

   pilotSurvey = new pilotSurvey
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

  constructor(private route: ActivatedRoute, private router: Router,
    private pilotService: PilotServiceService, private termsService: TermsServiceService ) 
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
      role: "FlyController",
      airport: this.pickAirport

    })

  }

  ngOnInit(): void 
  {
     this.loadPilot();
     this.loadTerms();
  }

  loadPilot()
  {
    this.id = this.route.snapshot.params['id'];
    this.pilotService.getPilotById(this.id)
    .subscribe(res => this.pilot = res)
  }

  loadTerms()
  {
    this.id = this.route.snapshot.params['id'];
    this.termsService.getTermsByPilot(this.id)
    .subscribe(res => this.flyTerms = res)
  }

  addNegativePoint(flyTerm: FlyTerms)
  {
    this.pilotService.AddPenal(flyTerm)
    .subscribe(res => this.flyTerm = res)
   

    if(flyTerm.pilotCome == true)
    {
      alert("Пилот је дошао на термин!Не можете дати негативан поен!");
    }
    else
    {
      alert("Пилоту је додељен негативан поен!");
      window.location.reload();
   }

  }

  //Promena Statusa da li je korisnik dosao na pregled
  UpdateFlyTerm(flyTerm:FlyTerms)
  {
    this.pilotService.UpdateFlyTerm(flyTerm)
    .subscribe(res => this.flyTerm = res)
    window.location.reload();
  }

  ShowTerm(id:number)
  {
     location.pathname = ('controll_survey/' + id);
  }

  Back()
  {
    location.pathname = ('stuff_profile')
  }

  

}
