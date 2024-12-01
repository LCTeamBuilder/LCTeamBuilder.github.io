import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { DimensionShredderHongLuAwakening } from "./DimensionShredderHongLuAwakening";
import { DimensionShredderHongLuCorrosion } from "./DimensionShredderHongLuCorrosion";

export const DimensionShredderHongLu: Ego = {
    Id: 20603,
    Name: "Dimension Shredder",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: DimensionShredderHongLuAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: DimensionShredderHongLuCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Entangled Phenomena Restoration", PassiveTypeEnum.Ego, "When hitting an enemy with negative status effects, this unit gains +1 [Charge] Count.<br>"+
        "(Max +4 per turn.)<br>When HP falls to 0 for the first time during battle, spend all [Charge] and heal in proportion to the amount spent. (Cannot heal over 25% Max HP.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/DimensionShredder/20603cg.png"
}