import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BindsOutisAwakening } from "./BindsOutisAwakening";
import { BindsOutisCorrosion } from "./BindsOutisCorrosion";

export const BindsOutis: Ego = {
    Id: 21106,
    Name: "Binds",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: BindsOutisAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: BindsOutisCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Grand Welcome", PassiveTypeEnum.Ego, "After Attack from this unit: if the target is Staggered or defeated, gain +1 Pride E.G.O resource and +1 E.G.O resource for 1 other random Affinity (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Pride, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/Binds/21106cg.png"
}