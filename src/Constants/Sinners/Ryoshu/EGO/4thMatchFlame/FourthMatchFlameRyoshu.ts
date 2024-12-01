import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { FourthMatchFlameRyoshuAwakening } from "./FourthMatchFlameRyoshuAwakening";
import { FourthMatchFlameRyoshuCorrosion } from "./FourthMatchFlameRyoshuCorrosion";

export const FourthMatchFlameRyoshu: Ego = {
    Id: 20402,
    Name: "4th Match Flame",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FourthMatchFlameRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FourthMatchFlameRyoshuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("4th Match Flame", PassiveTypeEnum.Ego, "Every 4th skill used gains +4 Final Power and inflicts 4 [Burn] with each of its attacks."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402cg.png"
}