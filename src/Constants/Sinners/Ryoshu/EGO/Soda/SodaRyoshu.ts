import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SodaRyoshuAwakening } from "./SodaRyoshuAwakening";
import { SodaRyoshuCorrosion } from "./SodaRyoshuCorrosion";

export const SodaRyoshu: Ego = {
    Id: 20405,
    Name: "Soda",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: SodaRyoshuAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: SodaRyoshuCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Opened Can", PassiveTypeEnum.Ego, "On hit, if the target has 5+ [Sinking], inflict 1 [Defense Power Down]. (5 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/Soda/20405cg.png"
}