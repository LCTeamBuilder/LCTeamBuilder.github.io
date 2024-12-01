import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { EverlastingFaustAwakening } from "./EverlastingFaustAwakening";
import { EverlastingFaustCorrosion } from "./EverlastingFaustCorrosion";

export const EverlastingFaust: Ego = {
    Id: 20206,
    Name: "Everlasting",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: EverlastingFaustAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: EverlastingFaustCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Running Time", PassiveTypeEnum.Ego, "When this unit uses a Skill to trigger [Tremor Burst] on an enemy, gain 1 [Haste] next turn. (4 times per turn, including E.G.O Skills)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.75 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/Everlasting/20206cg.png"
}