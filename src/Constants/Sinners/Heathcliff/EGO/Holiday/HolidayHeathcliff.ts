import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { HolidayHeathcliffAwakening } from "./HolidayHeathcliffAwakening";
import { HolidayHeathcliffCorrosion } from "./HolidayHeathcliffCorrosion";

export const HolidayHeathcliff: Ego = {
    Id: 20705,
    Name: "Holiday",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: HolidayHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HolidayHeathcliffCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Infinite Hatred", PassiveTypeEnum.Ego, "When this unit has a status effect or a negative effect, and if the main target or the attacker has a positive effect:<br>"+
        "- Inflict +1 more [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] Potency to self and enemies with Skill effects or Coin effects<br>"+
        "- Gain +1 more [Poise] and [Charge] Count with Skill effects or Coin effects"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/Holiday/20705cg.png"
}