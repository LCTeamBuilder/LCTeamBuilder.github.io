import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { WishingCairnYiSangAwakening } from "./WishingCairnYiSangAwakening";
import { WishingCairnYiSangCorrosion } from "./WishingCairnYiSangCorrosion";

export const WishingCairnYiSang: Ego = {
    Id: 20103,
    Name: "Wishing Cairn",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: WishingCairnYiSangAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: WishingCairnYiSangCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Dol Hareubang", PassiveTypeEnum.Ego, "At the start of the turn, gain 3 [Blunt Protection] and [Sloth Protection]."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/WishingCairn/20103cg.png"
}