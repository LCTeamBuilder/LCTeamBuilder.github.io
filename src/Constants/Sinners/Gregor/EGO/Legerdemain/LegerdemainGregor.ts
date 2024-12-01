import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LegerdemainGregorAwakening } from "./LegerdemainGregorAwakening";
import { LegerdemainGregorCorrosion } from "./LegerdemainGregorCorrosion";

export const LegerdemainGregor: Ego = {
    Id: 21202,
    Name: "Legerdemain",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: LegerdemainGregorAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: LegerdemainGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Maggots", PassiveTypeEnum.Ego, "On hit, inflict 5 [Maggots] at a (Gluttony A-Reson. x8)% chance."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/Legerdemain/21202cg.png"
}