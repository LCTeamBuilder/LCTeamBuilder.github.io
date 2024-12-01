import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { DimensionShredderOutisAwakening } from "./DimensionShredderOutisAwakening";
import { DimensionShredderOutisCorrosion } from "./DimensionShredderOutisCorrosion";

export const DimensionShredderOutis: Ego = {
    Id: 21107,
    Name: "Dimension Shredder",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: DimensionShredderOutisAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: DimensionShredderOutisCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Rambling Man", PassiveTypeEnum.Ego, "Max [Charge] Count +5<br>"+
        "Skills that consume [Charge] Count deal +2% more damage for every ([Charge] -1) (max 10%)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Pride, amount: 1 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/DimensionShredder/21107cg.png"
}