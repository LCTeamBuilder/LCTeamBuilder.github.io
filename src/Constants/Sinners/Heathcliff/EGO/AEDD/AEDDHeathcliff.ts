import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { AEDDHeathcliffAwakening } from "./AEDDHeathcliffAwakening";
import { AEDDHeathcliffCorrosion } from "./AEDDHeathcliffCorrosion";

export const AEDDHeathcliff: Ego = {
    Id: 20703,
    Name: "AEDD",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: AEDDHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: AEDDHeathcliffCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Temperamental Discharge", PassiveTypeEnum.Ego, "When hit, spend 1 [Charge] Count to heal 2.5% of Max HP<br>"+
        "At less than 40% HP, gain 1 [Charge] Count before activating the healing effect. (Can gain up to 10 [Charge] Count per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/AEDD/20703cg.png"
}