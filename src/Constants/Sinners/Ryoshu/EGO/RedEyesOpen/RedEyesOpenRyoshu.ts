import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RedEyesOpenRyoshuAwakening } from "./RedEyesOpenRyoshuAwakening";
import { RedEyesOpenRyoshuCorrosion } from "./RedEyesOpenRyoshuCorrosion";

export const RedEyesOpenRyoshu: Ego = {
    Id: 20404,
    Name: "Red Eyes (Open)",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: RedEyesOpenRyoshuAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: RedEyesOpenRyoshuCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Predator", PassiveTypeEnum.Ego, "If this unit healed more than 10% of its Max HP this turn, gain 1 [Attack Power Up] next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404cg.png"
}