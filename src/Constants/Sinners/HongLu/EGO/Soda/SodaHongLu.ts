import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { SodaHongLuAwakening } from "./SodaHongLuAwakening";
import { SodaHongLuCorrosion } from "./SodaHongLuCorrosion";

export const SodaHongLu: Ego = {
    Id: 20604,
    Name: "Soda",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: SodaHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: SodaHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Seagull Squawking Of The Distant Seas", PassiveTypeEnum.Ego, "When an enemy is defeated, the ally with the least SP heals 1 SP. Whenever an enemy is defeated, the amount of SP healed increases by 2. (Max 9) The amount is reset at the start of a new wave."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/Soda/20604cg.png"
}