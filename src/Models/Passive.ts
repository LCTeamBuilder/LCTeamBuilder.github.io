import { PassiveCostTypeEnum, PassiveTypeEnum, SinEnum } from '../Enums/Index';

export class Passive {
    public readonly Name: string;
    public readonly Type: PassiveTypeEnum;
    public readonly Cost?: ReadonlyArray<{ sin: SinEnum, amount: number }>;
    public readonly CostType?: PassiveCostTypeEnum;
    public readonly Description: string;

    constructor(name: string, type: PassiveTypeEnum, description: string, cost?: ReadonlyArray<{ sin: SinEnum, amount: number }>, costType?: PassiveCostTypeEnum) {
        this.Name = name;
        this.Type = type;
        this.Cost = cost;
        this.CostType = costType
        this.Description = description;
    }
}