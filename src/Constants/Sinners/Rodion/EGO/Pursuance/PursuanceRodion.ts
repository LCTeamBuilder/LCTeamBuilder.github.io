import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { PursuanceRodionAwakening } from "./PursuanceRodionAwakening";
import { PursuanceRodionCorrosion } from "./PursuanceRodionCorrosion";

export const PursuanceRodion: Ego = {
    Id: 20905,
    Name: "Pursuance",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: PursuanceRodionAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: PursuanceRodionCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Sentencing from Above", PassiveTypeEnum.Ego, "Whenever the enemy is Staggered, the ally with the least HP percentage heals 4% of their Max HP"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/Pursuance/20905cg.png"
}