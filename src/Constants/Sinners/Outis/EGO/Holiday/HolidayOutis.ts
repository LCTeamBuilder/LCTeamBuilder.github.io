import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { HolidayOutisAwakening } from "./HolidayOutisAwakening";
import { HolidayOutisCorrosion } from "./HolidayOutisCorrosion";

export const HolidayOutis: Ego = {
    Id: 21105,
    Name: "Holiday",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: HolidayOutisAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: HolidayOutisCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Fair Presents", PassiveTypeEnum.Ego, "When applying positive effects to other allies with Skill effects or Coin effects, randomly select one of the following effects:<br>"+
        "[Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect to 1 random enemy. (Activates 5 times per Turn. Can be applied up to 5 times per enemy. For abnormalities, applied to a random Part.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/Holiday/21105cg.png"
}