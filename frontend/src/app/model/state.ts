import { Airport } from "./airport";

interface StateInterface
{
    id:number;
    state_mark: string;
    state_name: string;
    listOfAirports: Airport[];
    
}
export class State implements StateInterface{
    id:number;
    state_mark: string;
    state_name: string;
    listOfAirports: Airport[];
  

    constructor(obj:StateInterface){
        this.id=obj.id;
        this.state_mark = obj.state_mark;
        this.state_name = obj.state_name;
        this.listOfAirports = obj.listOfAirports;
  
    } 
}