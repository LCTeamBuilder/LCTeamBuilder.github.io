import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LassoHongLuAwakening } from "./LassoHongLuAwakening";
import { LassoHongLuCorrosion } from "./LassoHongLuCorrosion";

export const LassoHongLu: Ego = {
    Id: 20607,
    Name: "Lasso",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LassoHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LassoHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Time to Hunt", PassiveTypeEnum.Ego, "If an enemy or an ally is killed due to [Rupture] or [Bleed] damage, inflict 2 [Lasso] against a random enemy, and gain 1 [Haste] next turn (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 4 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/Snare/20607cg.png"
}