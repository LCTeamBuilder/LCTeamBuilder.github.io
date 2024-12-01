import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LandOfIllusionHongLuAwakening } from "./LandOfIllusionHongLuAwakening";

export const LandOfIllusionHongLu: Ego = {
    Id: 20601,
    Name: "Land of Illusion",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: LandOfIllusionHongLuAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Ripple", PassiveTypeEnum.Ego, "At the start of the combat phase, heal SP by the count of your highest A-Reson. value, excluding those in Panic."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gloom, amount: 5 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/LandOfIllusion/20601cg.png"
}