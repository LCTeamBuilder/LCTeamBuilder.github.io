import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BodysackHeathcliffAwakening } from "./BodysackHeathcliffAwakening";

export const BodysackHeathcliff: Ego = {
    Id: 20701,
    Name: "Bodysack",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: BodysackHeathcliffAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Vying Spirit", PassiveTypeEnum.Ego, "When another ally defeats an enemy, gain 1 [Attack Power Up] and 1 [Haste] at the start of the next turn. (Max 3)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/Bodysack/20701cg.png"
}