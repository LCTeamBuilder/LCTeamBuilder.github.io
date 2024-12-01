import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { YaSunyataTadRupamOutisAwakening } from "./YaSunyataTadRupamOutisAwakening";
import { YaSunyataTadRupamOutisCorrosion } from "./YaSunyataTadRupamOutisCorrosion";

export const YaSunyataTadRupamOutis: Ego = {
    Id: 21103,
    Name: "Ya Śūnyatā Tad Rūpam",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: YaSunyataTadRupamOutisAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: YaSunyataTadRupamOutisCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Emptying", PassiveTypeEnum.Ego, "At the start of the turn, gain 1 [Lust DMG Up].<br>"+
        "Gain 1 more when below 0 SP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103cg.png"
}