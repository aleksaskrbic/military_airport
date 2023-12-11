import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirplaneService } from '../service/airplane.service';
import { Airport } from '../model/airport';
import { Pilot } from '../model/pilot';
import { PilotServiceService } from '../service/pilot-service.service';

@Component({
  selector: 'app-airport-profile',
  templateUrl: './airport-profile.component.html',
  styleUrls: ['./airport-profile.component.css']
})
export class AirportProfileComponent implements OnInit {


  id: number;
  airport: Airport;
  pilot: Pilot;
  pilots: Pilot[];
  

  constructor(private route: ActivatedRoute, private airplaneService: AirplaneService,
   private pilotService: PilotServiceService, private router: Router) { }

  ngOnInit(): void 
  {
    this.loadAirport();
    this.showPilots();
  }


  loadAirport()
  {
    this.id = this.route.snapshot.params['id'];
    this.airplaneService.getAirportById(this.id)
    .subscribe(res => this.airport = res)
  }

  showPilots()
  {
    this.id = this.route.snapshot.params['id'];
    this.pilotService.getPilotByAirportId(this.id)
    .subscribe(res => this.pilots = res)
  }

  pilotProfile(pilot_id: number)
  {
    location.pathname = ('pilot_profile/' + pilot_id);

  }

  

}
