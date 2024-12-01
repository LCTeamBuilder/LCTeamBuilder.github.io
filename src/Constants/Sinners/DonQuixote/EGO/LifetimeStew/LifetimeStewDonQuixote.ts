import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LifetimeStewDonQuixoteAwakening } from "./LifetimeStewDonQuixoteAwakening";
import { LifetimeStewDonQuixoteCorrosion } from "./LifetimeStewDonQuixoteCorrosion";

export const LifetimeStewDonQuixote: Ego = {
    Id: 20304,
    Name: "Lifetime Stew",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LifetimeStewDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LifetimeStewDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Cauldron of Gorging", PassiveTypeEnum.Ego, "At the start of the turn, convert 2 random non-Lust E.G.O resources into 1 Lust resource."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 5 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304cg.png"
}