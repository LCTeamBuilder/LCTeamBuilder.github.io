import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SunshowerYiSangAwakening } from "./SunshowerYiSangAwakening";
import { SunshowerYiSangCorrosion } from "./SunshowerYiSangCorrosion";

export const SunshowerYiSang: Ego = {
    Id: 20105,
    Name: "Sunshower",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: SunshowerYiSangAwakening,
    AwakeningSanityCost: 35,
    CorrosionSkill: SunshowerYiSangCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Ray of Sun After Rain", PassiveTypeEnum.Ego, "At the start of the turn, all allies heal 3 SP"),   
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                    { sin: SinEnum.Lust, resistance: 2 },
                    { sin: SinEnum.Sloth, resistance: 0.75 },
                    { sin: SinEnum.Gluttony, resistance: 0.5 },
                    { sin: SinEnum.Gloom, resistance: 1 },
                    { sin: SinEnum.Pride, resistance: 1 },
                    { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4},
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/Sunshower/20105cg.png"
}