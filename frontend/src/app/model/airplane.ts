import { Airport } from "./airport";
import { Mechanic } from "./mechanic";
import { WeaponSystem } from "./weaponSystem";


interface AirplaneInterface
{
    id:number;
    registrationMark: string;
    airplane_name: string;
    airplaneType: string;
    seat_number: number;
    airport: Airport;
    maximum_speed: number;
    length_wings: number;
    pogon: string;
    maximum_high: number;
    tactical_radius:number;
    rocket_radius: number;
    fuel_reserve: number;

    enabled: boolean;
    weaponSystem: WeaponSystem;
    mechanic: Mechanic;
   
}

export class Airplane implements AirplaneInterface
{
    id:number;
    registrationMark: string;
    airplane_name: string;
    airplaneType: string;
    seat_number: number;
    airport: Airport;
    maximum_speed: number;
    length_wings: number;
    pogon: string;
    maximum_high: number;
    tactical_radius:number;
    rocket_radius: number;
    fuel_reserve: number;
    enabled: boolean;
    weaponSystem: WeaponSystem;
    mechanic: Mechanic;
 

    constructor(obj:AirplaneInterface)
    {
        this.id=obj.id;
        this.registrationMark=obj.registrationMark;
        this.airplane_name=obj.airplane_name;
        this.airplaneType=obj.airplaneType;
        this.seat_number=obj.seat_number;
        this.airport=obj.airport;
        this.maximum_speed = obj.maximum_speed;
        this.length_wings = obj.length_wings;
        this.pogon = obj.pogon;
        this.maximum_high = obj.maximum_high;
        this.tactical_radius = obj.tactical_radius;
        this.rocket_radius = obj.rocket_radius;
        this.fuel_reserve = obj.fuel_reserve;
        this.enabled = obj.enabled;
        this.weaponSystem = obj.weaponSystem;
        this.mechanic = obj.mechanic;
   } 
}