import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SunshowerOutisAwakening } from "./SunshowerOutisAwakening";
import { SunshowerOutisCorrosion } from "./SunshowerOutisCorrosion";

export const SunshowerOutis: Ego = {
    Id: 21104,
    Name: "Sunshower",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: SunshowerOutisAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: SunshowerOutisCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Breath of the Hunt", PassiveTypeEnum.Ego, "After a clash, gain 2 [Poise]<br>"+
        "When staggered, gain 2 [Protection], when recovering from stagger, gain 5 [Poise]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/Sunshower/21104cg.png"
}