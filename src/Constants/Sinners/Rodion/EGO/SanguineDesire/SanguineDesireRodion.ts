import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SanguineDesireRodionAwakening } from "./SanguineDesireRodionAwakening";
import { SanguineDesireRodionCorrosion } from "./SanguineDesireRodionCorrosion";

export const SanguineDesireRodion: Ego = {
    Id: 20906,
    Name: "Sanguine Desire",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: SanguineDesireRodionAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: SanguineDesireRodionCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Obsession", PassiveTypeEnum.Ego, "This unit's leftmost Skill on the Dashboard inflicts double the [Bleed] Potency (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.75 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/SanguineDesire/20906cg.png"
}