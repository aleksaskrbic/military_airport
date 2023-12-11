import { Airplane } from "./airplane";
import { FlyControler } from "./flycontroler";
import { Pilot } from "./pilot";
import { State } from "./state";

interface AirportInterface{
    id:number;
    airport_mark: string;
    airport_name: string;
    city: string;
    location: string;
    number_of_planes: number;
    number_of_stuff: number;
    
    listOfPilots: Pilot[];
    listOfFlyControlers: FlyControler[];
    state: State;
   
}

export class Airport implements AirportInterface
{
    id:number;
    airport_mark: string;
    airport_name: string;
    city: string;
    location: string;
    number_of_planes: number;
    number_of_stuff: number;
    
    listOfPilots: Pilot[];
    listOfFlyControlers: FlyControler[];
    state: State;
 

    constructor(obj:AirportInterface)
    {
        this.id=obj.id;
        this.airport_mark=obj.airport_mark;
        this.airport_name=obj.airport_name;
        this.city=obj.city;
        this.location = obj.location;
        this.number_of_planes = obj.number_of_planes;
        this.number_of_stuff = obj.number_of_stuff;
        this.listOfPilots = obj.listOfPilots;
        this.listOfFlyControlers = obj.listOfFlyControlers;
        this.state = obj.state;
       
    } 

} 
