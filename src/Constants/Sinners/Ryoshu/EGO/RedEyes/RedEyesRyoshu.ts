import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RedEyesRyoshuAwakening } from "./RedEyesRyoshuAwakening";
import { RedEyesRyoshuCorrosion } from "./RedEyesRyoshuCorrosion";

export const RedEyesRyoshu: Ego = {
    Id: 20403,
    Name: "Red Eyes",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RedEyesRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RedEyesRyoshuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Spider's Webs", PassiveTypeEnum.Ego, "On clash win, inflict 1 [Bind] next turn. (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/RedEyes/20403cg.png"
}