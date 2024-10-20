import { PassiveCostTypeEnum } from "../Enums/PassiveCostTypeEnum";
import { PassiveTypeEnum } from "../Enums/PassiveTypeEnum";
import { SinEnum } from "../Enums/SinEnum";

export class Passive {
    public Name: string;
    public Type: PassiveTypeEnum;
    public Cost?: {sin: SinEnum, amount: number}[];
    public CostType?: PassiveCostTypeEnum;
    public Description: string;

    constructor(name: string, type: PassiveTypeEnum, description: string, cost?: {sin: SinEnum, amount: number}[], costType?: PassiveCostTypeEnum){
        this.Name = name;
        this.Type = type;
        this.Cost = cost;
        this.CostType = costType
        this.Description = description;
    }
}