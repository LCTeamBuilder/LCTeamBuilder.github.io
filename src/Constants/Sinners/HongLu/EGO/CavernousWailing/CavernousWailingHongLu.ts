import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { CavernousWailingHongLuAwakening } from "./CavernousWailingHongLuAwakening";
import { CavernousWailingHongLuCorrosion } from "./CavernousWailingHongLuCorrosion";

export const CavernousWailingHongLu: Ego = {
    Id: 20606,
    Name: "Cavernous Wailing",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: CavernousWailingHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: CavernousWailingHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Gloominess", PassiveTypeEnum.Ego, "When this unit uses a Skill to trigger [Tremor Burst] on an enemy, inflict 1 [Offense Level Down] and 2 [Defense Level Down] on the enemy next turn. (3 times per turn, including E.G.O Skills)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 3 },
            { sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/CavernousWailing/20606cg.png"
}