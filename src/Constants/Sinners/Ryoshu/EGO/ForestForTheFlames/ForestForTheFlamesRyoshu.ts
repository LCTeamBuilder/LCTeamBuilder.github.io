import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ForestForTheFlamesRyoshuAwakening } from "./ForestForTheFlamesRyoshuAwakening";

export const ForestForTheFlamesRyoshu: Ego = {
    Id: 20401,
    Name: "Forest for the Flames",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: ForestForTheFlamesRyoshuAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Art", PassiveTypeEnum.Ego, "Deal and take +5% damage for each enemy this unit defeated last turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/ForestForTheFlames/20401cg.png"
}