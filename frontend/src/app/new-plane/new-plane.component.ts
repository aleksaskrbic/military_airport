import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Airplane } from '../model/airplane';
import { AirplaneService } from '../service/airplane.service';
import { Airport } from '../model/airport';
import { State } from '../model/state';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { WeaponSystem } from '../model/weaponSystem';
import { Mechanic } from '../model/mechanic';
import { PilotServiceService } from '../service/pilot-service.service';
import { FlyControler } from '../model/flycontroler';

@Component({
  selector: 'app-new-plane',
  templateUrl: './new-plane.component.html',
  styleUrls: ['./new-plane.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewPlaneComponent implements OnInit {

  newPlane: Airplane;
  planes: Airplane[];
  controller_id: number;
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

  constructor(private airplaneService: AirplaneService, private registrationService: RegistrationService,
    private router: Router, private pilotService: PilotServiceService) 
  {


    this.newPlane = new Airplane
      ({
          id: 6,
          registrationMark:"",
          airplane_name: "",
          airplaneType: "",
          seat_number: 0,
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

          }),
          maximum_speed: 0,
          length_wings: 0,
          pogon: "",
          maximum_high: 0,
          tactical_radius: 0,
          rocket_radius: 0,
          fuel_reserve: 0,
           enabled: true,
           weaponSystem: new WeaponSystem
           ({
                 id: 1,
                 system_name: "",
                 number_of_rockets: 0,
                 rocket_type: ""
           }),
           mechanic: new Mechanic
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
    this.findFlyController();
  }

  RegisterPlane()
  {
    console.log(this.newPlane)
    this.registrationService.RegistrationNewPlane(this.newPlane)
    .subscribe();
    alert("Успешно је регистрован Нови Авион!")
    location.pathname = ('all_planes');
    
  }

  findFlyController()
  {
    this.controller_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getControllerById(this.controller_id)
    .subscribe(res => this.flyController = res)
  }

  Back()
  {
    location.pathname = ('stuff_profile')
  }

}
