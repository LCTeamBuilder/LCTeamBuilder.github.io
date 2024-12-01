import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ToPathosMathosOutisAwakening } from "./ToPathosMathosAwakening";

export const ToPathosMathosOutis: Ego = {
    Id: 21101,
    Name: "To Páthos Máthos",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: ToPathosMathosOutisAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    //CorrosionSanityCost: undefined,
    Passive: new Passive("Tactical Perfection", PassiveTypeEnum.Ego, "If the unit did not get hit at all during a turn, gain 1 [Damage Up] next turn. (Max 3 stacks)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/ToPathosMathos/21101cg.png"
}