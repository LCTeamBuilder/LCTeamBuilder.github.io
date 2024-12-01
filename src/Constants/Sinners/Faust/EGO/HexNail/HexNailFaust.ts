import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { HexNailFaustAwakening } from "./HexNailFaustAwakening";
import { HexNailFaustCorrosion } from "./HexNailFaustCorrosion";

export const HexNailFaust: Ego = {
    Id: 20203,
    Name: "Hex Nail",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: HexNailFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HexNailFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("It Hurts!", PassiveTypeEnum.Ego, "Deal +10% damage for every negative status effect on this unit. (Up to 50%)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Envy, amount: 6 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/HexNail/20203cg.png"
}