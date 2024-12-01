import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { YaSunyataTadRupamHeathcliffAwakening } from "./YaSunyataTadRupamHeathcliffAwakening";
import { YaSunyataTadRupamHeathcliffCorrosion } from "./YaSunyataTadRupamHeathcliffCorrosion";

export const YaSunyataTadRupamHeathcliff: Ego = {
    Id: 20704,
    Name: "Ya Śūnyatā Tad Rūpam",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: YaSunyataTadRupamHeathcliffAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: YaSunyataTadRupamHeathcliffCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Dhyāna", PassiveTypeEnum.Ego, "Raise Max HP by 15% of this Identity's base Max HP when recovering from Staggered state.<br>"+
        "Then, heal by 15% of current Max HP. If at less than 30% of current Max HP, heal by 25% instead.<br>"+
        "(3 times per encounter. At Encounter End, revert to base Max HP. Current HP value will be adjusted to reflect the HP percentage at the time of Encounter End.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704cg.png"
}