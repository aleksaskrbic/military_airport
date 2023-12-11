import { Airport } from "./airport";

interface PilotInterface
{
    id:number;
    username: string ;
    password: string ;
    email: string;
    firstName: string;
    lastName: string;
    mobile:string;
    state: string;
    city: string;
    adress: string;
    profession: string;
    organizationInformation: string;
    enabled:boolean;
    role: string;

    cin: string;
    points: number;
    airport: Airport;
}

export class Pilot implements PilotInterface{
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    username: string ;
    password: string ;
    mobile:string;
    state: string;
    city: string;
    adress: string;
    profession: string;
    organizationInformation: string;
    enabled:boolean;
    role: string;
    cin: string;
    points: number;
    airport: Airport;
    
    

    constructor(obj:PilotInterface){
        this.id=obj.id;
        this.firstName=obj.firstName;
        this.lastName=obj.lastName;
        this.email=obj.email;
        this.username=obj.username;
        this.password=obj.password;
        this.mobile = obj.mobile;
        this.state = obj.state;
        this.city = obj.city;
        this.adress = obj.adress;
        this.profession = obj.profession;
        this.organizationInformation = obj.organizationInformation;
        this.enabled = obj.enabled;
        this.role = obj.role;
        this.cin = obj.cin;
        this.points = obj.points;
        this.airport = obj.airport;
       } 
    
}