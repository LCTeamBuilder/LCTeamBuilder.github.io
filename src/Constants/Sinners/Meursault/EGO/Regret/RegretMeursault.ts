import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RegretMeursaultAwakening } from "./RegretMeursaultAwakening";
import { RegretMeursaultCorrosion } from "./RegretMeursaultCorrosion";

export const RegretMeursault: Ego = {
    Id: 20505,
    Name: "Regret",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RegretMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RegretMeursaultCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Bound Wrath", PassiveTypeEnum.Ego, "This unit's leftmost skill on the Dashboard loses 1 Base Power and gains 2 Coin Power<br>"+
        "At the start of the turn, if at 4- Speed, gain 1 [Blunt Power Up]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/Regret/20505cg.png"
}