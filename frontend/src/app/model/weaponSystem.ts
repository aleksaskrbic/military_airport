import { Airplane } from "./airplane";

interface WeaponSystemInterface
{
    id: number;
    system_name: string;
    number_of_rockets: number;
    rocket_type: string;
}

export class WeaponSystem implements WeaponSystemInterface
{

    id: number;
    system_name: string;
    number_of_rockets: number;
    rocket_type: string;

    constructor(obj: WeaponSystemInterface)
    {
        this.id = obj.id;
        this.system_name = obj.system_name;
        this.number_of_rockets = obj.number_of_rockets;
        this.rocket_type = obj.rocket_type;
    }

}