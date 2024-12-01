import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { BranchOfKnowledgeSinclairAwakening } from "./BranchOfKnowledgeSinclairAwakening";

export const BranchOfKnowledgeSinclair: Ego = {
    Id: 21001,
    Name: "Branch of Knowledge",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: BranchOfKnowledgeSinclairAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Unstable", PassiveTypeEnum.Ego, "If a skill's Coin hits with a different side from the previous Coin in the same skill, lose 5 SP and gain 1 [Damage Up] this turn. (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3}],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001cg.png"
}