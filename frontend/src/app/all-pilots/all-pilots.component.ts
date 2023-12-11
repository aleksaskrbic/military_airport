import { Component, OnInit } from '@angular/core';
import { Pilot } from '../model/pilot';
import { ActivatedRoute, Router } from '@angular/router';
import { PilotServiceService } from '../service/pilot-service.service';
import { FlyControler } from '../model/flycontroler';
import { State } from '../model/state';
import { Airport } from '../model/airport';

@Component({
  selector: 'app-all-pilots',
  templateUrl: './all-pilots.component.html',
  styleUrls: ['./all-pilots.component.css']
})
export class AllPilotsComponent implements OnInit {

  pilots: Pilot[];
  pilot: Pilot;
  controller_id: number;
  flyController: FlyControler;

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


  constructor(private route: ActivatedRoute, private pilotService: PilotServiceService,
    private router: Router)  
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
    this.viewAllPilots();
    this.findControllerById();
  }

  viewAllPilots()
  {
    this.pilotService.getAllPilots()
    .subscribe(res => this.pilots = res)
  }

  PilotProfile(pilot_id: number)
  {
    location.pathname = ('stuff_pilot_profile/' + pilot_id);

  }

  findControllerById()
  {
    this.controller_id = Number(sessionStorage.getItem('id'));
     this.pilotService.getControllerById(this.controller_id)
     .subscribe(res => this.flyController = res)
  }

  Back()
  {
    location.pathname = ('stuff_profile');
  }


}
