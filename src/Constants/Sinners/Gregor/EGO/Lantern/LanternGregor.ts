import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LanternGregorAwakening } from "./LanternGregorAwakening";
import { LanternGregorCorrosion } from "./LanternGregorCorrosion";

export const LanternGregor: Ego = {
    Id: 21203,
    Name: "Lantern",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LanternGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LanternGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Nutrient Absorption", PassiveTypeEnum.Ego, "After defeating an enemy that has [Rupture], heal HP by (Gluttony A-Reson.)% of Max HP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/Lantern/21203cg.png"
}