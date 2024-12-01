import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BygoneDaysIshmaelAwakening } from "./BygoneDaysIshmaelAwakening";
import { BygoneDaysIshmaelCorrosion } from "./BygoneDaysIshmaelCorrosion";

export const BygoneDaysIshmael: Ego = {
    Id: 20807,
    Name: "Bygone Days",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: BygoneDaysIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: BygoneDaysIshmaelCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Interloper Reception", PassiveTypeEnum.Ego, "If the target has [The Uninvited] or any of the Panic Type changing effects, Clash Power +1.<br>"+
        "On Hit against the said target, heal 1 ally with the least SP for 5 SP. (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gloom, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/BygoneDays/20807cg.png"
}