import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BygoneDaysGregorAwakening } from "./BygoneDaysGregorAwakening";
import { BygoneDaysGregorCorrosion } from "./BygoneDaysGregorCorrosion";

export const BygoneDaysGregor: Ego = {
    Id: 21206,
    Name: "Bygone Days",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: BygoneDaysGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: BygoneDaysGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("If I Could Go Back…", PassiveTypeEnum.Ego, "After Attack: If the target is defeated after this unit's attack, gain 1 E.G.O resource for the least-owned E.G.O resource.<br>"+
        "Gain 1 additional E.G.O resource for every 5 ([Sinking] Potency + Count) (max 3)<br>"+
        '(If there are 2 or more "least-owned E.G.O resource", select 1 of those Affinities at random to gain an E.G.O resource)'),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gloom, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/BygoneDays/21206cg.png"
}