import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ElectricScreamingMeursaultAwakening } from "./ElectricScreamingMeursaultAwakening";
import { ElectricScreamingMeursaultCorrosion } from "./ElectricScreamingMeursaultCorrosion";

export const ElectricScreamingMeursault: Ego = {
    Id: 20506,
    Name: "Electric Screaming",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ElectricScreamingMeursaultAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: ElectricScreamingMeursaultCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Overloading Cables", PassiveTypeEnum.Ego, "Combat Start: At 4+ Reson., gain 2 [Offense Level Up] and 2 [Defense Level Up]<br>"+
        "If the Reson. was an Envy Reson., apply the above effects to 2 units adjacent to this unit on the Dashboard as well"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506cg.png"
}