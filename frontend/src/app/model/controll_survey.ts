import { FlyTerms } from "./flyterms";
import { mechanicSurvey } from "./mechanicSurvey";
import { pilotSurvey } from "./pilotSurvey";

interface ControllSurveyInterface
{
     id : number;
     number_of_rockets : number;
     rocket_type : string;
     road_length : number;
     fuel_used : number;
     mission_type : string;
     mission_success : string ;
     extra_note : string;
     plane_damage : string;
     mission_goal : string;
     flyTerm : FlyTerms;
     pilotSurvey: pilotSurvey;
     mechanicSurvey: mechanicSurvey;
}

export class ControllSurvey implements ControllSurveyInterface
{
     id : number;
     number_of_rockets : number;
     rocket_type : string;
     road_length : number;
     fuel_used : number;
     mission_type : string;
     mission_success : string ;
     extra_note : string;
     plane_damage : string;
     mission_goal : string;
     flyTerm : FlyTerms;
     pilotSurvey: pilotSurvey;
     mechanicSurvey: mechanicSurvey;

     constructor(obj: ControllSurveyInterface)
     {
         this.id = obj.id;
         this.number_of_rockets = obj.number_of_rockets;
         this.rocket_type = obj.rocket_type;
         this.road_length = obj.road_length;
         this.fuel_used = obj.fuel_used
         this.mission_type = obj.mission_type;
         this.mission_success = obj.mission_success;
         this.extra_note = obj.extra_note;
         this.plane_damage = obj.plane_damage;
         this.mission_goal =obj.mission_goal;
         this.flyTerm = obj.flyTerm;
         this.pilotSurvey = obj.pilotSurvey;
         this.mechanicSurvey = obj.mechanicSurvey;

     }

}
