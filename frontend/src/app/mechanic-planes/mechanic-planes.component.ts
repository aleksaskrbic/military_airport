import { Component, OnInit } from '@angular/core';
import { Airplane } from '../model/airplane';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsServiceService } from '../service/terms-service.service';
import { AirplaneService } from '../service/airplane.service';
import { FlyTerms } from '../model/flyterms';
import { Mechanic } from '../model/mechanic';
import { PilotServiceService } from '../service/pilot-service.service';

@Component({
  selector: 'app-mechanic-planes',
  templateUrl: './mechanic-planes.component.html',
  styleUrls: ['./mechanic-planes.component.css']
})
export class MechanicPlanesComponent implements OnInit {

  airplane: Airplane;
  airplanes: Airplane[];
  flyTerm: FlyTerms;
  flyTerms: FlyTerms[];
  mechanic_id: number;
  mechanic: Mechanic;


  constructor(private route: ActivatedRoute, private router: Router, private termsService: TermsServiceService,
    private airplaneService: AirplaneService, private pilotService: PilotServiceService) { }

  ngOnInit(): void 
  {
    this.viewAllPlanes();
  }

  viewAllPlanes()
  {
    this.termsService.getAllTerms()
    .subscribe(res => this.flyTerms = res)
  }

  findMechanicByID()
  {
    this.mechanic_id = Number(sessionStorage.getItem('id'));
    this.pilotService.getMechanicById(this.mechanic_id)
    .subscribe(res => this.mechanic = res)
  }

  PlaneProfile(id: number)
  {
    location.pathname = ('plane_profile/' + id);
  }

  SortPlanesByType()
  {
       this.airplaneService.getAllPlanesSortByType()
       .subscribe(res => this.airplanes = res)
  }

  SortPlanesByMark()
  {
    this.airplaneService.getAllPlanesSortByMark()
    .subscribe(res => this.airplanes = res)
  }

  SortPlanesBySystem()
  {
    this.airplaneService.getAllPlanesSortBySystem()
    .subscribe(res => this.airplanes = res)
  }

}
