import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirplaneService } from '../service/airplane.service';
import { Pilot } from '../model/pilot';
import { Airport } from '../model/airport';
import { State } from '../model/state';
import { FlyTerms } from '../model/flyterms';
import { PilotServiceService } from '../service/pilot-service.service';
import { Airplane } from '../model/airplane';
import { WeaponSystem } from '../model/weaponSystem';
import { TermsServiceService } from '../service/terms-service.service';

@Component({
  selector: 'app-plane-profile',
  templateUrl: './plane-profile.component.html',
  styleUrls: ['./plane-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlaneProfileComponent implements OnInit {

  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
  newPilot: Pilot;
  id: number;
  pilot_id: number;
  airplane: Airplane;
  weaponSystem: WeaponSystem;

  placeholder = 'Унесите информације';


  constructor(private route: ActivatedRoute, private router: Router, private termsService: TermsServiceService,
    private airplaneService: AirplaneService, private pilotService: PilotServiceService) 
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
  }

  ngOnInit(): void 
  {
    this.findPilotById();
    //this.loadPlane();
    this.loadTerm();
  }

  findPilotById()
  {
    this.pilot_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getPilotById(this.pilot_id)
    .subscribe(res => this.newPilot = res)
  }

  loadPlane()
  {
      this.id = this.route.snapshot.params['id'];
      this.airplaneService.getPlaneById(this.id)
      .subscribe(res => this.airplane = res)
  }

  loadPlane1(id: number)
  {
    this.airplaneService.getPlaneById(this.id)
    .subscribe(res => this.airplane = res)
  }

  loadTerm()
  {
    this.id = this.route.snapshot.params['id'];
    this.termsService.getTermByID(this.id)
    .subscribe(res => this.flyTerm = res)
    this.loadPlane1(this.flyTerm.airplane.id)
  }

  viewMechanicSurvey(id: number)
  {
     location.pathname = ('mechanic_survey/' + this.id);

  }

  Back()
  {
     location.pathname = ('mechanic_planes');
  }

    

}
