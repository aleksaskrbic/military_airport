import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Airplane } from '../model/airplane';
import { ActivatedRoute, Router } from '@angular/router';
import { AirplaneService } from '../service/airplane.service';

@Component({
  selector: 'app-all-planes',
  templateUrl: './all-planes.component.html',
  styleUrls: ['./all-planes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllPlanesComponent implements OnInit {

  //myimage: string = "assets/img/flota.png"

  airplanes: Airplane[];
  airplane: Airplane;

  constructor(private route: ActivatedRoute, private airplaneService: AirplaneService,
              private router: Router) 
  { 
    
  }

  viewAllPlanes()
  {
    this.airplaneService.getAllAirplanes()
    .subscribe(res => this.airplanes = res)
  }

  

  ngOnInit(): void 
  {
      this.viewAllPlanes();
  }

  PilotProfile()
  {
    location.pathname = ('pilot_profile');
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
