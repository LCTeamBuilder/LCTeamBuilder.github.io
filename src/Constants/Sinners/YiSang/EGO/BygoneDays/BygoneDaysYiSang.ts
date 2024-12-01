import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BygoneDaysYiSangAwakening } from "./BygoneDaysYiSangAwakening";
import { BygoneDaysYiSangCorrosion } from "./BygoneDaysYiSangCorrosion";

export const BygoneDaysYiSang: Ego = {
    Id: 20106,
    Name: "Bygone Days",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: BygoneDaysYiSangAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: BygoneDaysYiSangCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Fractured Yesterday", PassiveTypeEnum.Ego, 
                    "If the target has 6+ [Sinking] Potency, Clash Power +1<br>"+
                    "If the target has 4+ [Sinking] Count, Clash Power +1"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 3},
            { sin: SinEnum.Gloom, amount: 3}],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/BygoneDays/20106cg.png"
}