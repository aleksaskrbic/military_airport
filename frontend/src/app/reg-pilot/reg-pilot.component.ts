import { Component, OnInit } from '@angular/core';
import { Pilot } from '../model/pilot';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Airport } from '../model/airport';
import { State } from '../model/state';
import { FlyControler } from '../model/flycontroler';
import { PilotServiceService } from '../service/pilot-service.service';

@Component({
  selector: 'app-reg-pilot',
  templateUrl: './reg-pilot.component.html',
  styleUrls: ['./reg-pilot.component.css']
})
export class RegPilotComponent implements OnInit {

  newPilot: Pilot;
  flyController: FlyControler;
  controller_id: number;
  pilots: Pilot[];
  placeholder = 'Унесите информације...';


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


  constructor(private registrationService: RegistrationService, 
    private router: Router, private pilotService: PilotServiceService) 
  { 
      this.newPilot = new Pilot
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
         airport: new Airport
         ({

          id:1,
            airport_mark: "",
            airport_name: "",
            city: "",
            location: "",
            number_of_planes: 0,
            number_of_stuff: 0,
            
            listOfPilots: [],
            listOfFlyControlers: [],
            state: new State 
            ({
              id: 1,
              state_mark: "",
              state_name: "",
              listOfAirports: []

            })

         })

        
      });

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
    this.findControler();
  }

  findControler()
  {
    this.controller_id = Number(sessionStorage.getItem('id'));
     this.pilotService.getControllerById(this.controller_id)
     .subscribe(res => this.flyController = res)
  }

  RegisterPilot()
  {
    console.log(this.newPilot)
    this.registrationService.RegistrationNewPilot(this.newPilot)
    .subscribe();
    alert("Успешно је регистрован нови Пилот!")
  }

  Back()
  {
    location.pathname = ('stuff_profile')
  }

}
