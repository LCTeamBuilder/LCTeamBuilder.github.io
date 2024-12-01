import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { WhatIsCastRodionAwakening } from "./WhatIsCastRodionAwakening";

export const WhatIsCastRodion: Ego = {
    Id: 20901,
    Name: "What is Cast",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: WhatIsCastRodionAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Severance", PassiveTypeEnum.Ego, "+1 [SP Heal Efficiency], -1 [SP Loss Efficiency]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 3}],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/WhatIsCast/20901cg.png"
}