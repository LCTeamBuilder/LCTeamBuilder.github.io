import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { PursuanceMeursaultAwakening } from "./PursuanceMeursaultAwakening";
import { PursuanceMeursaultCorrosion } from "./PursuanceMeursaultCorrosion";

export const PursuanceMeursault: Ego = {
    Id: 20503,
    Name: "Pursuance",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: PursuanceMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: PursuanceMeursaultCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Revelation from Above", PassiveTypeEnum.Ego, "After winning a clash with the leftmost skill on the Dashboard, apply 1 [Attack Power Up] or 1 [Defense Power Up] to a random ally next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/Pursuance/20503cg.png"
}