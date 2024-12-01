import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ContemptAweRyoshuAwakening } from "./ContemptAweRyoshuAwakening";
import { ContemptAweRyoshuCorrosion } from "./ContemptAweRyoshuCorrosion";

export const ContemptAweRyoshu: Ego = {
    Id: 20407,
    Name: "Contempt, Awe",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: ContemptAweRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ContemptAweRyoshuCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Mark of the Gaze", PassiveTypeEnum.Ego, "Whenever this unit uses a base Attack Skill against an enemy, gain 1 additional E.G.O resource for a random, least-owned Affinity that doesn't correspond to the Affinity of the Attack Skill used"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 4 },
            { sin: SinEnum.Pride, amount: 4 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407cg.png"
}