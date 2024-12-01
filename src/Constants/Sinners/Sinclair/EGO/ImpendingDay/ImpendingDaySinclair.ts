import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ImpendingDaySinclairAwakening } from "./ImpendingDaySinclairAwakening";
import { ImpendingDaySinclairCorrosion } from "./ImpendingDaySinclairCorrosion";

export const ImpendingDaySinclair: Ego = {
    Id: 21002,
    Name: "Impending Day",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ImpendingDaySinclairAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ImpendingDaySinclairCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Live Offering", PassiveTypeEnum.Ego, "After defeating an enemy with an attack or counter skill, gain 5 E.G.O resources of that skill's Affinity."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002cg.png"
}