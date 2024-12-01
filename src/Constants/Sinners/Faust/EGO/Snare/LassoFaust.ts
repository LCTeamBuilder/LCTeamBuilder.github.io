import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LassoFaustAwakening } from "./LassoFaustAwakening";
import { LassoFaustCorrosion } from "./LassoFaustCorrosion";

export const LassoFaust: Ego = {
    Id: 20207,
    Name: "Lasso",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LassoFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LassoFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Sprawling Lasso", PassiveTypeEnum.Ego, "After Attack, if the target is Staggered or defeated, inflict +1 [Rupture] Count against 2 random enemies (once per turn, cannot stack, in Focused Encounters, against 2 random Parts)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/Snare/20207cg.png"
}