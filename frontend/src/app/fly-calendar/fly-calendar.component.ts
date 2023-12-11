import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';
import { FlyTerms } from '../model/flyterms';
import { PilotServiceService } from '../service/pilot-service.service';
import { FlyControler } from '../model/flycontroler';
import { State } from '../model/state';
import { Airport } from '../model/airport';

@Component({
  selector: 'app-fly-calendar',
  templateUrl: './fly-calendar.component.html',
  styleUrls: ['./fly-calendar.component.css']
})
export class FlyCalendarComponent implements OnInit {

  flyTerm: FlyTerms;
  flyControler: FlyControler;
  flyTerms: FlyTerms[];
  id: number;
  controllor_id: number;

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

  constructor(private route: ActivatedRoute, private termsService: TermsServiceService,
              private pilotService: PilotServiceService,private router: Router) 
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
    this.id = this.route.snapshot.params['id'];
    this.findControllorById();
  }

  findControllorById()
  {
    this.controllor_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getControllerById(this.controllor_id)
    .subscribe(res => this.flyControler = res)
  }

  viewAllTerms()
  {
    this.termsService.getAllTerms()
    .subscribe(res => this.flyTerms = res)
  }

  sortTermsByDate()
  {
    this.termsService.sortByDate()
    .subscribe(res => this.flyTerms = res)
}

  sortTermsByDuration()
  {
    this.termsService.sortByDuration()
    .subscribe(res => this.flyTerms = res)
  }

  sortTermsByComing()
  {
    this.termsService.sortByComing()
    .subscribe(res => this.flyTerms = res)
  }

  viewPilotProfile(id: number)
  {
     location.pathname = ('stuff_pilot_profile/' + id);
  }

  viewPlaneProfile(id: number)
  {
    location.pathname = ('plane_profile/' + id);
  }

  Back()
  {
    location.pathname = ('stuff_profile');
  }

}
