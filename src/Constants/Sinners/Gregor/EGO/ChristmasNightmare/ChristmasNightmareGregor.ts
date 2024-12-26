import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ChristmasNightmareGregorAwakening } from "./ChristmasNightmareGregorAwakening";
import { ChristmasNightmareGregorCorrosion } from "./ChristmasNightmareGregorCorrosion";

export const ChristmasNightmareGregor: Ego = {
    Id: 21208,
    Name: "Christmas Nightmare",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ChristmasNightmareGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ChristmasNightmareGregorCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Insomniac Night", PassiveTypeEnum.Ego, "Combat Start: against all enemies, inflict 1 Offense Level Down.pngOffense Level Down or 1 Defense Level Down.pngDefense Level Down to all enemies (# of enemies in Staggered, Low Morale, or Panic states) times. (2 times per turn)<br>"+
        "- Effect does not stack with E.G.O Gifts with the same effect."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/ChristmasNightmare/21208cg.png"
}