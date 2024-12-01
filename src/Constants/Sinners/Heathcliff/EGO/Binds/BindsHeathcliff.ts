import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BindsHeathcliffAwakening } from "./BindsHeathcliffAwakening";
import { BindsHeathcliffCorrosion } from "./BindsHeathcliffCorrosion";

export const BindsHeathcliff: Ego = {
    Id: 20706,
    Name: "Binds",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: BindsHeathcliffAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: BindsHeathcliffCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Chains of Binding", PassiveTypeEnum.Ego, "- Combat Start: At 4+ highest Reson. that includes this unit's Skills, apply 3 [Offense Level Up] and 3 [Defense Level Up] to self and all allies who were a part of the Reson.<br>"+
        "- If the said Reson. was an A-Reson., apply 2 additional [Offense Level Up] and [Defense Level Up]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gloom, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/Binds/20706cg.png"
}