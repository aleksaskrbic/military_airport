import { Airplane } from "./airplane";
import { Pilot } from "./pilot";
import { RailWay } from "./railWay";


interface AddFastTermsInterface
{
    start: string;
    end: string;
    duration: number;
    pilot: Pilot;
    airplane: Airplane;
    railWay: RailWay;
}

export class AddFastTerms implements AddFastTermsInterface 
{

    start: string;
    end: string;
    duration: number;
    pilot: Pilot;
    airplane: Airplane;
    railWay: RailWay;


constructor(obj: AddFastTermsInterface)
 {
    this.start = obj.start;
    this.end = obj.end;
    this.duration = obj.duration;
    this.pilot = obj.pilot;
    this.airplane = obj.airplane;
    this.railWay = obj.railWay;
 }

}