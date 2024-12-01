import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { AEDDGregorAwakening } from "./AEDDGregorAwakening";
import { AEDDGregorCorrosion } from "./AEDDGregorCorrosion";

export const AEDDGregor: Ego = {
    Id: 21204,
    Name: "AEDD",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: AEDDGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: AEDDGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Alternating Discharge", PassiveTypeEnum.Ego, "On hit with a Heads coin, spend 2 [Charge] Count to give +1 [Charge] Count to the Charge-possessing ally with the lowest [Charge] Count"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/AEDD/21204cg.png"
}