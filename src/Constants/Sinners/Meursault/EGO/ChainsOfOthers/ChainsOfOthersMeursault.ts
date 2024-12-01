import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ChainsOfOthersMeursaultAwakening } from "./ChainsOfOthersMeursaultAwakening";

export const ChainsOfOthersMeursault: Ego = {
    Id: 20501,
    Name: "Chains of Others",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: ChainsOfOthersMeursaultAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Refusal to Judge", PassiveTypeEnum.Ego, "At the start of the combat phase, gain 3 [Protection] if the unit is targeted by 3 or more skills."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/ChainsOfOthers/20501cg.png"
}