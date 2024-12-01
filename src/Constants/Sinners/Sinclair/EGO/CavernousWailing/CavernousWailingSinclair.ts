import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { CavernousWailingSinclairAwakening } from "./CavernousWailingSinclairAwakening";
import { CavernousWailingSinclairCorrosion } from "./CavernousWailingSinclairCorrosion";

export const CavernousWailingSinclair: Ego = {
    Id: 21006,
    Name: "Cavernous Wailing",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: CavernousWailingSinclairAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: CavernousWailingSinclairCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Tear Film", PassiveTypeEnum.Ego, "Turn Start: If this unit has Shield, gain 1 [Protection]<br>"+
        "If this unit is under [Blubberbubble]'s effect, gain 1 additional [Protection]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006cg.png"
}