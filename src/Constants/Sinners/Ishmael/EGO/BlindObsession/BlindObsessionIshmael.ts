import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BlindObsessionIshmaelAwakening } from "./BlindObsessionIshmaelAwakening";
import { BlindObsessionIshmaelCorrosion } from "./BlindObsessionIshmaelCorrosion";

export const BlindObsessionIshmael: Ego = {
    Id: 20805,
    Name: "Blind Obsession",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: BlindObsessionIshmaelAwakening,
    AwakeningSanityCost: 35,
    CorrosionSkill: BlindObsessionIshmaelCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Temeritous Voyage", PassiveTypeEnum.Ego, "At the end of the turn, inflict 5 [Sinking] to 1 other ally with the lowest HP, Apply 1 [Haste] and 3 [Offense Level Up] next turn"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/BlindObsession/20805cg.png"
}