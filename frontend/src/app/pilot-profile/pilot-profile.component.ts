import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PilotServiceService } from '../service/pilot-service.service';
import { Pilot } from '../model/pilot';
import { FlyTerms } from '../model/flyterms';
import { TermsServiceService } from '../service/terms-service.service';
import { Airport } from '../model/airport';
import { State } from '../model/state';
@Component({
  selector: 'app-pilot-profile',
  templateUrl: './pilot-profile.component.html',
  styleUrls: ['./pilot-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PilotProfileComponent implements OnInit {

  id: number;
  pilot: Pilot;
  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
 
  pilot_id: number;


  placeholder = 'Унесите информације';

  constructor(private route: ActivatedRoute, private router: Router,
   private pilotService: PilotServiceService, private termsService: TermsServiceService ) 
   { 
    this.pilot = new Pilot
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

    this.loadPilot();
    this.loadTerms();
    this.findPilotById();
  }


  findPilotById()
  {
    this.pilot_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getPilotById(this.pilot_id)
    .subscribe(res => this.pilot = res)
    
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

  UpdatePilot()
  {
    this.pilotService.UpdatePilot(this.pilot)
    .subscribe(res => this.pilot = res)
    alert("Успешно сачуване измене на профилу!");
    
    window.location.reload();
    this.loadPilot();
  }

  ReserveTerm()
  {
    location.pathname = ('schedule_terms')
  }

  sortByDate() 
  {
    //this.termsService.sortByDate(this.id)
    this.termsService.sortByDate()
    .subscribe(res => this.flyTerms = res)
  }

  sortByDuration() 
  {
     //this.termsService.sortByDuration(this.id)
     this.termsService.sortByDuration()
     .subscribe(res => this.flyTerms = res)

    
  }

  sortByComing() 
  {
     //this.termsService.sortByComing(this.id)
     this.termsService.sortByComing()
     .subscribe(res => this.flyTerms = res)
  }

  viewFutureTerms()
  {
    location.pathname = ('future_terms/' + this.id);

  }



}
