import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { FourthMatchFlameYiSangAwakening } from "./FourthMatchFlameYiSangAwakening";
import { FourthMatchFlameYiSangCorrosion } from "./FourthMatchFlameYiSangCorrosion";

export const FourthMatchFlameYiSang: Ego = {
    Id: 20102,
    Name: "4th Match Flame",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: FourthMatchFlameYiSangAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FourthMatchFlameYiSangCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Ember", PassiveTypeEnum.Ego, "On clash win, inflict [Burn] by (Wrath A-Reson. / 2). (Once per skill.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 5 },
            { sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102cg.png"
}