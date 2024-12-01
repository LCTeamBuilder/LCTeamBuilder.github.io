import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { CrowsEyeViewYisangAwakening } from "./CrowsEyeViewYiSangAwakening";

export const CrowsEyeViewYisang: Ego = {
    Id: 20101,
    Name: "Crow's Eye View",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: CrowsEyeViewYisangAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Silence", PassiveTypeEnum.Ego, "When hit by an attack, gain 3 [Bind] next turn, and deal +20% damage when attacking with a type or Affinity the target is Weak or Fatal to. (Once per turn.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },              { sin: SinEnum.Sloth, amount: 3}],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/CrowsEyeView/20101cg.png",

}