import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { TelepoleFaustAwakening } from "./TelepoleFaustAwakening";
import { TelepoleFaustCorrosion } from "./TelepoleFaustCorrosion";

export const TelepoleFaust: Ego = {
    Id: 20204,
    Name: "Telepole",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: TelepoleFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TelepoleFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Adaptive Release", PassiveTypeEnum.Ego, "While this unit has [Charge], deal +2% damage per [Charge] Count.<br>"+
        "Skills spend -2 [Charge] Count."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/Telepole/20204cg.png"
}