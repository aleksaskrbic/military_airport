import { Airplane } from "./airplane";
import { Mechanic } from "./mechanic";
import { Pilot } from "./pilot";

interface MechanicSurveyInterface
{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    mobile: string;
    adress: string;
    city: string;
    state: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    mechanic: Mechanic;
    airplane: Airplane;
    mechanic_approved: boolean;

}

export class mechanicSurvey implements MechanicSurveyInterface
{

    id: number;
    email: string;
    firstName: string;
    lastName: string;
    mobile: string;
    adress: string;
    city: string;
    state: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    mechanic: Mechanic;
    airplane: Airplane;
    mechanic_approved: boolean;


    constructor(obj: MechanicSurveyInterface)
    {
        this.id = obj.id;
        this.email = obj.email;
        this.firstName= obj.firstName;
        this.lastName = obj.lastName;
        this.mobile = obj.mobile;
        this.adress = obj.adress;
        this.city = obj.city;
        this.state = obj.state;
        this.p1 = obj.p1;
        this.p2 = obj.p2;
        this.p3 = obj.p3;
        this.p4 = obj.p4;
        this.p5 = obj.p5;
        this.p6 = obj.p6;
        this.p7 = obj.p7;
        this.p8 = obj.p8;
        this.mechanic = obj.mechanic;
        this.airplane = obj.airplane;
        this.mechanic_approved = obj.mechanic_approved;
    }

}
