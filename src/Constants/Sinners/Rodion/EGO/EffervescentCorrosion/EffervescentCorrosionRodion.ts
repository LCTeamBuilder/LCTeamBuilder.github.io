import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { EffervescentCorrosionRodionAwakening } from "./EffervescentCorrosionRodionAwakening";
import { EffervescentCorrosionRodionCorrosion } from "./EffervescentCorrosionRodionCorrosion";

export const EffervescentCorrosionRodion: Ego = {
    Id: 20904,
    Name: "Effervescent Corrosion",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: EffervescentCorrosionRodionAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: EffervescentCorrosionRodionCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Sticky Filth", PassiveTypeEnum.Ego, "On Heads Hit with a Pierce Skill, inflict 1 [Bind] (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904cg.png"
}