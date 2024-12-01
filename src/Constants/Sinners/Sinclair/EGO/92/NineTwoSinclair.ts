import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { NineTwoSinclairAwakening } from "./NineTwoSinclairAwakening";
import { NineTwoSinclairCorrosion } from "./NineTwoSinclairCorrosion";

export const NineTwoSinclair: Ego = {
    Id: 21005,
    Name: "9:2",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: NineTwoSinclairAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: NineTwoSinclairCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Prophecy of Ruin", PassiveTypeEnum.Ego, "On Heads Hit with a Lust affinity Skill, lower this unit and the target's SP by 4.<br>"+
        "(Does not work against without Sanity)<br>"+
        "Gain 5 Lust E.G.O resource On Kill with a Lust affinity Skill"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 5 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/92/21005cg.png"
}