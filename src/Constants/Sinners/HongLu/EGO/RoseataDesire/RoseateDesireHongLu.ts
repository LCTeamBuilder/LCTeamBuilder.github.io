import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RoseateDesireHongLuAwakening } from "./RoseateDesireHongLuAwakening";
import { RoseateDesireHongLuCorrosion } from "./RoseateDesireHongLuCorrosion";

export const RoseateDesireHongLu: Ego = {
    Id: 20602,
    Name: "Roseate Desire",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RoseateDesireHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RoseateDesireHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Binding Ribbons", PassiveTypeEnum.Ego, "The target of the leftmost skill on the Dashboard is inflicted with (Lust A-Reson. / 4) [Lust Fragility] next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 4 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/RoseataDesire/20602cg.png"
}