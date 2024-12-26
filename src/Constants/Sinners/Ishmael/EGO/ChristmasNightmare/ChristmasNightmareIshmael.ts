import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ChristmasNightmareIshmaelAwakening } from "./ChristmasNightmareIshmaelAwakening";
import { ChristmasNightmareIshmaelCorrosion } from "./ChristmasNightmareIshmaelCorrosion";

export const ChristmasNightmareIshmael: Ego = {
    Id: 20808,
    Name: "Christmas Nightmare",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ChristmasNightmareIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ChristmasNightmareIshmaelCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("A Gaze in the Shadows", PassiveTypeEnum.Ego, "Allies gain +1 more [Tremor] Count from Skills or Coin effects (2 times per turn)<br>"+
        "- If the ally's target is in Staggered, Low Morale, or Panic states, gain +2 more instead<br>"+
        "- Effect does not stack with E.G.O Gifts of an identical effect."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gluttony, amount: 1 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/ChristmasNightmare/20808cg.png"
}