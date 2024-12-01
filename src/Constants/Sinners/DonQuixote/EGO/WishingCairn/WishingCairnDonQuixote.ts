import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { WishingCairnDonQuixoteAwakening } from "./WishingCairnDonQuixoteAwakening";
import { WishingCairnDonQuixoteCorrosion } from "./WishingCairnDonQuixoteCorrosion";

export const WishingCairnDonQuixote: Ego = {
    Id: 20305,
    Name: "Wishing Cairn",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: WishingCairnDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: WishingCairnDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Fallen Stone Pagoda", PassiveTypeEnum.Ego, "Gain 2 [Poise] and +2 [Poise] Count when defeating an enemy with [Bleed] (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305cg.png"
}