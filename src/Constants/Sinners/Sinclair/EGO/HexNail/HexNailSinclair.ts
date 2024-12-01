import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { HexNailSinclairAwakening } from "./HexNailSinclairAwakening";
import { HexNailSinclairCorrosion } from "./HexNailSinclairCorrosion";

export const HexNailSinclair: Ego = {
    Id: 21007,
    Name: "Hex Nail",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: HexNailSinclairAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HexNailSinclairCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Grimy Hide", PassiveTypeEnum.Ego, "Combat Start: if this unit has a negative effect, gain 1 [Clash Power Up] and 1 [Defense Power Up]<br>"+
        "- Gain 1 [Protection] for every 3 negative effect on self (max 2)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/HexNail/21007cg.png"
}