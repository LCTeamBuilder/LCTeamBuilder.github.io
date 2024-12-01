import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RoseateDesireIshmaelAwakening } from "./RoseateDesireIshmaelAwakening";
import { RoseateDesireIshmaelCorrosion } from "./RoseateDesireIshmaelCorrosion";

export const RoseateDesireIshmael: Ego = {
    Id: 20802,
    Name: "Roseate Desire",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RoseateDesireIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RoseateDesireIshmaelCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Pink Ribbons", PassiveTypeEnum.Ego, "On clash win, inflict 1 [Pink Ribbons]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802cg.png"
}