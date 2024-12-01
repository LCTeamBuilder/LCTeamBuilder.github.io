import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { TelepoleHeathcliffAwakening } from "./TelepoleHeathcliffAwakening";
import { TelepoleHeathcliffCorrosion } from "./TelepoleHeathcliffCorrosion";

export const TelepoleHeathcliff: Ego = {
    Id: 20702,
    Name: "Telepole",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: TelepoleHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TelepoleHeathcliffCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Roar", PassiveTypeEnum.Ego, "After defeating an enemy, gain [Charge] by half that turn's Envy A-Reson.<br>(Envy A-Reson. / 2)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/Telepole/20702cg.png"
}