import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LifetimeStewSinclairAwakening } from "./LifetimeStewSinclairAwakening";
import { LifetimeStewSinclairCorrosion } from "./LifetimeStewSinclairCorrosion";

export const LifetimeStewSinclair: Ego = {
    Id: 21003,
    Name: "Lifetime Stew",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LifetimeStewSinclairAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: LifetimeStewSinclairCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Stew Spewage", PassiveTypeEnum.Ego, "Tails Coins inflict 1 [Burn] if hitting an enemy."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003cg.png"
}