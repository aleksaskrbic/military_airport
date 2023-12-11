import { Airplane } from "./airplane";
import { mechanicSurvey } from "./mechanicSurvey";
import { Pilot } from "./pilot";
import { pilotSurvey } from "./pilotSurvey";
import { RailWay } from "./railWay";



interface FlyTermsInterface
{
    id:number;
    start: Date;
    end:   Date;
    duration: number;
    pilotCome: boolean;
    freeTerm:boolean;
    mechanic_approved: boolean;
    completedTerm: boolean;
    pilot: Pilot;
    airplane: Airplane;
    railWay: RailWay;
    pilotSurvey: pilotSurvey;
    mechanicSurvey: mechanicSurvey;
    
}
export class FlyTerms implements FlyTermsInterface
{
    id:number;
    start: Date;
    end:   Date;
    duration: number;
    pilotCome: boolean;
    freeTerm:boolean;
    mechanic_approved: boolean;

    completedTerm: boolean;
    pilot: Pilot;
    airplane: Airplane;
    railWay: RailWay;
    pilotSurvey: pilotSurvey;
    mechanicSurvey: mechanicSurvey;




    constructor(obj:FlyTerms)
    {
        this.id=obj.id;
        this.start=obj.start;
        this.end=obj.end;
        this.duration=obj.duration;
        this.pilotCome=obj.pilotCome;
        this.freeTerm = obj.freeTerm;
        this.mechanic_approved = obj.mechanic_approved;
        this.completedTerm = obj.completedTerm;
        this.pilot=obj.pilot;
        this.airplane = obj.airplane;
        this.railWay = obj.railWay;
        this.pilotSurvey = obj.pilotSurvey;
        this.mechanicSurvey = obj.mechanicSurvey;
    } 
}