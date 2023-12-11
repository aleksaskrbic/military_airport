import { Airplane } from "./airplane";
import { Airport } from "./airport";


interface RailWayInterface
{
    id:number;
    strip_mark: string;
    planes_on_strip: number;
    airplanes_on_strip: Airplane[];
    airport: Airport;
   
   
}
export class RailWay implements RailWayInterface
{
    id:number;
    strip_mark: string;
    planes_on_strip: number;
    airplanes_on_strip: Airplane[];
    airport: Airport;
    
 

    constructor(obj:RailWayInterface)
    {
        this.id=obj.id;
        this.strip_mark=obj.strip_mark;
        this.planes_on_strip=obj.planes_on_strip;
        this.airplanes_on_strip=obj.airplanes_on_strip;
        this.airport=obj.airport;
   } 
}