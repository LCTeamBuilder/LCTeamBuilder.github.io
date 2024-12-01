import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BlindObsessionRyoshuAwakening } from "./BlindObsessionRyoshuAwakening";
import { BlindObsessionRyoshuCorrosion } from "./BlindObsessionRyoshuCorrosion";

export const BlindObsessionRyoshu: Ego = {
    Id: 20406,
    Name: "Blind Obsession",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: BlindObsessionRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: BlindObsessionRyoshuCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Dream Devouring", PassiveTypeEnum.Ego, "On Crit with a Pride affinity Skill, gain 1 [Poise] Count (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406cg.png"
}