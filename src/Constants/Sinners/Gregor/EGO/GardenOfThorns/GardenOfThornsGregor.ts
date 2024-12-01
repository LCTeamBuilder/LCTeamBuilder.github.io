import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { GardenOfThornsGregorAwakening } from "./GardenOfThornsGregorAwakening";
import { GardenOfThornsGregorCorrosion } from "./GardenOfThornsGregorCorrosion";

export const GardenOfThornsGregor: Ego = {
    Id: 21205,
    Name: "Garden of Thorns",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: GardenOfThornsGregorAwakening,
    AwakeningSanityCost: 30,
    CorrosionSkill: GardenOfThornsGregorCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Crown of Thorns", PassiveTypeEnum.Ego, "Turn Start: Inflict 2 [Rupture] Potency on a random enemy (In Focused Encounters, all parts)<br>"+
        "When activating Absolute Resonance, inflict 2 [Rupture] Potency on all enemies at Combat Start"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205cg.png"
}