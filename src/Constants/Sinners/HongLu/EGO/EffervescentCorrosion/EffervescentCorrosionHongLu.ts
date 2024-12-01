import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { EffervescentCorrosionHongLuAwakening } from "./EffervescentCorrosionHongLuAwakening";
import { EffervescentCorrosionHongLuCorrosion } from "./EffervescentCorrosionHongLuCorrosion";

export const EffervescentCorrosionHongLu: Ego = {
    Id: 20605,
    Name: "Effervescent Corrosion",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: EffervescentCorrosionHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: EffervescentCorrosionHongLuCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Green Slime", PassiveTypeEnum.Ego, "If struck at less than 50% HP, inflict 1 [Rupture] on the attacker. (Activates (Highest Gluttony A-Reson) times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 6 },
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605cg.png"
}