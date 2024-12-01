import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LanternSinclairAwakening } from "./LanternSinclairAwakening";
import { LanternSinclairCorrosion } from "./LanternSinclairCorrosion";

export const LanternSinclair: Ego = {
    Id: 21004,
    Name: "Lantern",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: LanternSinclairAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: LanternSinclairCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Fairy Lure", PassiveTypeEnum.Ego, "After defeating an enemy that mainly targets this unit at the start of the combat phase, heal 3% of Max HP + (Gluttony A-Reson.)% of Max HP"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/Lantern/21004cg.png"
}