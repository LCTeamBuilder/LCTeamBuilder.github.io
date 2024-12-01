import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { EbonyStemOutisAwakening } from "./EbonyStemOutisAwakening";
import { EbonyStemOutisCorrosion } from "./EbonyStemOutisCorrosion";

export const EbonyStemOutis: Ego = {
    Id: 21102,
    Name: "Ebony Stem",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: EbonyStemOutisAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: EbonyStemOutisCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Stem of Distrust", PassiveTypeEnum.Ego, "At the start of the turn, gain 1 [Pierce DMG Up]. On hit with a Heads coin, inflict 1 [Bind] and +1 [Rupture] Count next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/EbonyStem/21102cg.png"
}