import { Component, OnInit } from '@angular/core';
import { FlyTerms } from '../model/flyterms';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';
import { Pilot } from '../model/pilot';
import { Airport } from '../model/airport';
import { State } from '../model/state';
import { PilotServiceService } from '../service/pilot-service.service';
import { scheduleTerm } from '../model/scheduleTerm';

@Component({
  selector: 'app-scheduling-terms',
  templateUrl: './scheduling-terms.component.html',
  styleUrls: ['./scheduling-terms.component.css']
})
export class SchedulingTermsComponent implements OnInit {

  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
  newPilot: Pilot;
  id: number;
  pilot_id: number;
  term_id: number;

  scheduleTerm: scheduleTerm = new scheduleTerm
  ({
          flyTermId: 0,
          pilotId: 0,
          pilotSurveyId: 0
  })

  constructor(private route: ActivatedRoute, private termsService: TermsServiceService,
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
    }

  ngOnInit(): void 
  {
    this.findPilotById();
  }

  viewTerms()
  {
      this.termsService.getAllFreeTerms()
      .subscribe(res => this.flyTerms = res)
  }

  findPilotById()
  {
    this.pilot_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getPilotById(this.pilot_id)
    .subscribe(res => this.newPilot = res)
    this.viewTerms();
    
  }

  scheduleNewTerm(fly_term_id: number)
  {
    console.log('marko', this.scheduleTerm)
    this.term_id = Number(fly_term_id);
    
    location.pathname = ('pilot_survey/' + this.term_id);
    /*this.scheduleTerm.flyTermId = Number(fly_term_id);
    this.scheduleTerm.pilotId = Number(this.pilot_id);
    
    this.termsService.scheduleTerm(this.scheduleTerm)
    .subscribe(res => this.flyTerm = res);

    alert("Успешно резервисан нови термин за летење!");
    location.pathname = ('pilot_profile/' + this.pilot_id);*/
  }

  Back()
  {
    location.pathname = ('pilot_profile/' + this.pilot_id);
  }

}
