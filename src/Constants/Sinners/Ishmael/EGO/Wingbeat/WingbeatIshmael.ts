import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { WingbeatIshmaelAwakening } from "./WingbeatIshmaelAwakening";
import { WingbeatIshmaelCorrosion } from "./WingbeatIshmaelCorrosion";

export const WingbeatIshmael: Ego = {
    Id: 20806,
    Name: "Wingbeat",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: WingbeatIshmaelAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: WingbeatIshmaelCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Gluttony", PassiveTypeEnum.Ego, "If the main target took HP damage this turn and isn't at max HP at Skill Use:<br>"+
        "On Hit,<br>"+
        "- When this unit is at max HP, deal +5~+10% more damage.<br>"+
        "- When this unit isn't at max HP, heal 2~5 HP.<br>"+
        "(7 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/Wingbeat/20806cg.png"
}