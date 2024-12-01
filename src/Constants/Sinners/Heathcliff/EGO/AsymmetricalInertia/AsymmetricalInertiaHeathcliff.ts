import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { AsymmetricalInertiaHeathcliffAwakening } from "./AsymmetricalInertiaHeathcliffAwakening";
import { AsymmetricalInertiaHeathcliffCorrosion } from "./AsymmetricalInertiaHeathcliffCorrosion";

export const AsymmetricalInertiaHeathcliff: Ego = {
    Id: 20708,
    Name: "Asymmetrical Inertia",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: AsymmetricalInertiaHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: AsymmetricalInertiaHeathcliffCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Broken Bell", PassiveTypeEnum.Ego, "Inflict [Fragile] this turn on enemies who were hit by [Tremor Burst] from Skill, Coin, or Passive effects.<br>"+
        "- Does not stack with E.G.O Gifts that inflict [Fragile] upon triggering [Tremor Burst]. (If the said E.G.O Gifts have been enhanced, subtract this effect's value from the final value before inflicting it.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                    { sin: SinEnum.Lust, resistance: 1 },
                    { sin: SinEnum.Sloth, resistance: 0.5 },
                    { sin: SinEnum.Gluttony, resistance: 1 },
                    { sin: SinEnum.Gloom, resistance: 2 },
                    { sin: SinEnum.Pride, resistance: 2 },
                    { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708cg.png"
}