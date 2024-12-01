import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SolemnLamentGregorAwakening } from "./SolemnLamentGregorAwakening";
import { SolemnLamentGregorCorrosion } from "./SolemnLamentGregorCorrosion";

export const SolemnLamentGregor: Ego = {
    Id: 21207,
    Name: "Solemn Lament",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: SolemnLamentGregorAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: SolemnLamentGregorCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Lament", PassiveTypeEnum.Ego, "Turn End: if this unit has a negative effect, gain 1 [Attack Power Up] next turn<br>"+
        "When attacking targets that are either in Panic or in E.G.O Corrosion: deal +15% more damage"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/SolemnLament/21207cg.png"
}