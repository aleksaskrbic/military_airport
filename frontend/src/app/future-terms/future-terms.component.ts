import { Component, OnInit } from '@angular/core';
import { FlyTerms } from '../model/flyterms';
import { Pilot } from '../model/pilot';
import { scheduleTerm } from '../model/scheduleTerm';
import { ActivatedRoute } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';
import { PilotServiceService } from '../service/pilot-service.service';
import { Airport } from '../model/airport';
import { State } from '../model/state';

@Component({
  selector: 'app-future-terms',
  templateUrl: './future-terms.component.html',
  styleUrls: ['./future-terms.component.css']
})
export class FutureTermsComponent implements OnInit {

  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
  newPilot: Pilot;
  id: number;
  pilot_id: number;

  scheduleTerm: scheduleTerm = new scheduleTerm
  ({
          flyTermId: 0,
          pilotId: 0,
          pilotSurveyId: 0
  })

  constructor(private route: ActivatedRoute, private termsSerice: TermsServiceService,
    private pilotService: PilotServiceService ) 
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
    this.viewTerms();
  }

  findPilotById()
  {
    this.pilot_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getPilotById(this.pilot_id)
    .subscribe(res => this.newPilot = res)
    this.viewTerms();
    }

    viewTerms()
    {
      this.id = this.route.snapshot.params['id'];
      this.termsSerice.getFutureTermsByPilot(this.id)
      .subscribe(res => this.flyTerms = res)
    }

    cancelTerm(fly_term_id: number)
      {
        console.log('marko', this.scheduleTerm)
        this.scheduleTerm.flyTermId = Number(fly_term_id);
        this.scheduleTerm.pilotId = Number(this.pilot_id);

        this.termsSerice.cancelTerm(this.scheduleTerm)
        .subscribe(res => this.flyTerm = res);

        alert("Успешно Отказан Термин за Летење!");
        window.location.reload();
        location.pathname = ('pilot_profile/' + this.pilot_id);
     }


  Back()
  {
    location.pathname = ('pilot_profile/' + this.pilot_id);
  }
    

  

}
