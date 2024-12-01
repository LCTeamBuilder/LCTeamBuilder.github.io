import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SnagharpoonIshmaelAwakening } from "./SnagharpoonIshmaelAwakening";

export const SnagharpoonIshmael: Ego = {
    Id: 20801,
    Name: "Snagharpoon",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: SnagharpoonIshmaelAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Compulsion", PassiveTypeEnum.Ego, "Clash Power +2 in clashes whose win rate is in the unit's favor. Clash Power -2 in clashes whose win rate is against the unit's favor."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/Snagharpoon/20801cg.png"
}